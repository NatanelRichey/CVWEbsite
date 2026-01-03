#!/usr/bin/env python3
"""
Generate CV PDF from CV_DATA.txt using LaTeX (academic style)
Requires: pdflatex (LaTeX distribution like MiKTeX or TeX Live)
"""

import re
import os
import subprocess
import platform
import shutil

def escape_latex(text):
    """Escape special LaTeX characters (but preserve existing LaTeX commands)"""
    # Don't escape if text already contains LaTeX commands (like \href, \&, etc.)
    if '\\' in text and any(cmd in text for cmd in ['\\href', '\\&', '\\%', '\\$', '\\#']):
        # Text already has some LaTeX - be more careful
        # Only escape unescaped special chars
        import re
        # Escape & only if not already escaped
        text = re.sub(r'(?<!\\)&(?!\w)', r'\\&', text)
        # Escape % only if not already escaped
        text = re.sub(r'(?<!\\)%(?!\w)', r'\\%', text)
        # Escape $ only if not already escaped
        text = re.sub(r'(?<!\\)\$', r'\\$', text)
        # Escape # only if not already escaped
        text = re.sub(r'(?<!\\)#', r'\\#', text)
        # Escape _ only if not already escaped
        text = re.sub(r'(?<!\\)_', r'\\_', text)
        # Escape { and } only if not already escaped
        text = re.sub(r'(?<!\\)\{', r'\\{', text)
        text = re.sub(r'(?<!\\)\}', r'\\}', text)
        # Escape ^ only if not already escaped
        text = re.sub(r'(?<!\\)\^', r'\\textasciicircum{}', text)
        # Escape ~ only if not already escaped
        text = re.sub(r'(?<!\\)~', r'\\textasciitilde{}', text)
    else:
        # Simple case - escape all special chars
        special_chars = {
            '&': r'\&',
            '%': r'\%',
            '$': r'\$',
            '#': r'\#',
            '^': r'\textasciicircum{}',
            '_': r'\_',
            '{': r'\{',
            '}': r'\}',
            '~': r'\textasciitilde{}',
        }
        for char, replacement in special_chars.items():
            text = text.replace(char, replacement)
    return text

def parse_cv_data(filename):
    """Parse CV_DATA.txt and return structured data"""
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    
    # Extract header info
    header = []
    body_sections = {}
    current_section = None
    current_content = []
    
    i = 0
    # Get header (everything before first section)
    while i < len(lines):
        line = lines[i].rstrip('\n')
        if line.strip() and line.strip().isupper() and not line.startswith('---'):
            break
        if line.strip():
            header.append(line)
        i += 1
    
    # Parse sections
    while i < len(lines):
        line = lines[i].rstrip('\n')
        line_stripped = line.strip()
        
        if line_stripped and line_stripped.isupper() and not line_stripped.startswith('---') and not line_stripped.startswith('•'):
            if current_section:
                body_sections[current_section] = '\n'.join(current_content)
            current_section = line_stripped
            current_content = []
        elif line_stripped.startswith('---'):
            pass
        else:
            if current_section:
                current_content.append(line)
        i += 1
    
    if current_section:
        body_sections[current_section] = '\n'.join(current_content)
    
    return header, body_sections

def generate_latex(header, sections):
    """Generate LaTeX code from parsed CV data"""
    
    latex = """\\documentclass[10.5pt]{article}
\\usepackage[margin=0.45in, top=0.4in, bottom=0.4in]{geometry}
\\usepackage{enumitem}
\\usepackage{hyperref}
\\usepackage{url}
\\usepackage{tabularx}

% Balanced spacing
\\setlength{\\parskip}{3pt}
\\setlength{\\parindent}{0pt}

% List spacing with proper gaps between items
\\setlist{leftmargin=1.5em, topsep=3pt, itemsep=3pt, parsep=1pt}

% Custom commands for formatting
\\newcommand{\\cvsection}[1]{
    \\vspace{0.1in}
    \\noindent{\\large \\textbf{#1}}
    \\vspace{0.03in}
    \\hrule
    \\vspace{0.06in}
}

% Hyperlink setup
\\hypersetup{
    colorlinks=true,
    linkcolor=black,
    urlcolor=blue,
    citecolor=black
}

\\begin{document}

"""
    
    # HEADER
    if header:
        name = escape_latex(header[0].strip()) if len(header) > 0 else "Name"
        latex += "\\begin{center}\n"
        latex += f"    {{\\huge \\textbf{{{name}}}}}\\\\\n"
        latex += "    \\vspace{0.08in}\n"
        
        # Contact info - only phone/email line
        contact_info = ""
        links = {}
        bio_lines = []
        
        for line in header[1:]:
            line = line.strip()
            if not line:
                continue
            
            if line.startswith('http'):
                if 'cv-website' in line or 'Interactive CV' in line.lower():
                    links['Portfolio'] = line
                elif 'linkedin' in line.lower():
                    links['LinkedIn'] = line
                elif 'github' in line.lower():
                    links['GitHub'] = line
            elif 'Interactive CV' in line or 'interactive cv' in line.lower():
                url_match = re.search(r'(https?://[^\s]+)', line)
                if url_match:
                    links['Portfolio'] = url_match.group(1)
            elif '@' in line or line[0].isdigit():
                # Contact info (phone/email)
                contact_info = escape_latex(line)
            else:
                # Bio/summary lines
                bio_lines.append(line)
        
        if contact_info:
            latex += f"    {contact_info}\\\\\n"
        
        if links:
            link_items = []
            for label, url in links.items():
                link_items.append(f"\\href{{{url}}}{{{label}}}")
            latex += "    \\vspace{0.03in}\n"
            latex += "    " + " $|$ ".join(link_items) + "\n"
        
        latex += "    \\vspace{0.05in}\n"
        latex += "\\end{center}\n\n"
        
        # SUMMARY SECTION - use bio_lines collected from header (no line)
        if bio_lines:
            latex += "\\vspace{0.08in}\n"
            latex += "\\noindent{\\large \\textbf{Summary}}\n"
            latex += "\\vspace{0.06in}\n\n"
            summary_text = " ".join([escape_latex(l) for l in bio_lines])
            latex += f"\\noindent {summary_text}\n\n"
    
    # EXPERIENCE SECTION (moved before Education)
    if 'EXPERIENCE' in sections:
        latex += "\\cvsection{Professional Experience}\n"
        content = sections['EXPERIENCE']
        lines = [l for l in content.split('\n')]
        
        i = 0
        while i < len(lines):
            line = lines[i].strip()
            if not line:
                i += 1
                continue
            
            # Skip "Skills:" lines - they're metadata not job entries
            if line.startswith('Skills:'):
                i += 1
                continue
            
            if i < len(lines) and lines[i].strip():
                position = lines[i].strip()
                i += 1
                
                company = lines[i].strip() if i < len(lines) else ""
                i += 1
                
                dates = ""
                if i < len(lines):
                    dates_line = lines[i].strip()
                    if re.search(r'\d{4}|\d+\s*mos|Present', dates_line):
                        dates = dates_line
                        i += 1
                
                # Get intro paragraph and bullet points
                intro = ""
                bullet_points = []
                
                while i < len(lines):
                    line = lines[i].strip()
                    if not line:
                        i += 1
                        continue
                    # Stop at next section or "Skills:" line
                    if line.isupper() or line.startswith('Skills:'):
                        break
                    if line.startswith('•'):
                        bullet_points.append(line.replace('•', '').strip())
                    else:
                        # Non-bullet text is intro paragraph
                        if not bullet_points:
                            intro = line
                    i += 1
                
                # Format: Position, Company on left, dates on right
                role_text = f"{escape_latex(position)}, {escape_latex(company)}" if company else escape_latex(position)
                latex += f"\\noindent\\textbf{{{role_text}}} \\hfill {escape_latex(dates)}\\\\\n"
                
                if intro:
                    latex += f"{escape_latex(intro)}\n"
                
                if bullet_points:
                    latex += "\n\\begin{itemize}\n"
                    for bp in bullet_points:
                        latex += f"    \\item {escape_latex(bp)}\n"
                    latex += "\\end{itemize}\n"
                
                latex += "\n"
            else:
                i += 1
    
    # EDUCATION SECTION
    if 'EDUCATION' in sections:
        latex += "\\cvsection{Education}\n"
        content = sections['EDUCATION']
        lines = [l.strip() for l in content.split('\n') if l.strip()]
        
        if lines:
            institution = escape_latex(lines[0]) if len(lines) > 0 else ""
            degree = escape_latex(lines[1]) if len(lines) > 1 else ""
            location = escape_latex(lines[2]) if len(lines) > 2 else ""
            
            # Extract dates - look for line with year pattern
            dates = ""
            for line in lines:
                if re.search(r'^\d{4}\s*-\s*\d{4}', line) or re.search(r'^\d{4}$', line):
                    dates = escape_latex(line)
                    break
            
            # Format: Degree on left, dates on right, institution below
            latex += f"\\noindent\\textbf{{{degree}}} \\hfill {dates}\\\\\n"
            latex += f"{institution}, {location}\n\n"
    
    # TECHNICAL SKILLS SECTION
    if 'SKILLS' in sections:
        latex += "\\cvsection{Technical Skills}\n"
        latex += "\\begin{itemize}\n"
        content = sections['SKILLS']
        lines = [l.strip() for l in content.split('\n') if l.strip()]
        
        for line in lines:
            if ':' in line:
                parts = line.split(':', 1)
                category = escape_latex(parts[0].strip())
                items = [escape_latex(item.strip()) for item in parts[1].split(',') if item.strip()]
                items_str = ", ".join(items)
                latex += f"    \\item \\textbf{{{category}:}} {items_str}\n"
        
        latex += "\\end{itemize}\n\n"
    
    # PROJECTS SECTION
    if 'PROJECTS' in sections:
        latex += "\\cvsection{Projects}\n"
        content = sections['PROJECTS']
        lines = [l for l in content.split('\n')]
        
        i = 0
        while i < len(lines):
            line = lines[i].strip()
            if not line:
                i += 1
                continue
            
            if i < len(lines) and lines[i].strip() and not lines[i].strip().startswith('•'):
                title = escape_latex(lines[i].strip())
                i += 1
                
                description = ""
                if i < len(lines) and not lines[i].strip().startswith('•') and 'Technologies' not in lines[i] and 'GitHub' not in lines[i] and 'Live' not in lines[i] and 'Status' not in lines[i]:
                    description = lines[i].strip()
                    i += 1
                
                details = []
                technologies = ""
                links_text = []
                
                while i < len(lines):
                    line = lines[i].strip()
                    if not line:
                        i += 1
                        continue
                    if line.startswith('•'):
                        details.append(line.replace('•', '').strip())
                        i += 1
                    elif line.startswith('Technologies:'):
                        technologies = line.replace('Technologies:', '').strip()
                        i += 1
                    elif line.startswith('GitHub:'):
                        url_match = re.search(r'(https?://[^\s]+)', line)
                        if url_match:
                            links_text.append(f"\\href{{{url_match.group(1)}}}{{GitHub}}")
                        i += 1
                    elif line.startswith('Live:'):
                        url_match = re.search(r'(https?://[^\s]+)', line)
                        if url_match:
                            links_text.append(f"\\href{{{url_match.group(1)}}}{{Live}}")
                        i += 1
                    elif line.startswith('Status:'):
                        links_text.append(line.replace('Status:', '').strip())
                        i += 1
                    else:
                        break
                
                # Format project entry - compact
                tech_str = escape_latex(technologies) if technologies else ""
                latex += f"\\noindent\\textbf{{{title}}}"
                if tech_str:
                    latex += f" ({tech_str})"
                if links_text:
                    latex += " -- " + " $|$ ".join(links_text)
                latex += "\\\\\n"
                
                # Description and details - compact
                if description:
                    latex += f"{escape_latex(description)}\n"
                if details:
                    latex += "\n\\begin{itemize}\n"
                    for d in details:
                        latex += f"    \\item {escape_latex(d)}\n"
                    latex += "\\end{itemize}\n"
                
                latex += "\n"
            else:
                i += 1
    
    latex += "\\end{document}\n"
    return latex

def find_pdflatex():
    """Find pdflatex executable"""
    import shutil
    
    # First try to find in PATH
    pdflatex_path = shutil.which('pdflatex')
    if pdflatex_path:
        return pdflatex_path
    
    # Check common Windows MiKTeX installation paths
    if platform.system() == 'Windows':
        common_paths = [
            os.path.expanduser(r'~\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe'),
            r'C:\Program Files\MiKTeX\miktex\bin\x64\pdflatex.exe',
            r'C:\Program Files (x86)\MiKTeX\miktex\bin\x64\pdflatex.exe',
        ]
        for path in common_paths:
            if os.path.exists(path):
                return path
    
    return None

def compile_latex_to_pdf(tex_file, output_file):
    """Compile LaTeX file to PDF"""
    pdflatex_path = find_pdflatex()
    
    if not pdflatex_path:
        print("Searching for pdflatex...")
        # Try one more time with explicit path
        explicit_path = os.path.expanduser(r'~\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe')
        if os.path.exists(explicit_path):
            pdflatex_path = explicit_path
            print(f"Found pdflatex at: {pdflatex_path}")
        else:
            raise FileNotFoundError("pdflatex not found")
    else:
        print(f"Using pdflatex at: {pdflatex_path}")
    
    try:
        # First run: allow package installation
        print("Compiling LaTeX (first pass - may install packages)...")
        result = subprocess.run(
            [pdflatex_path, '-interaction=nonstopmode', '-output-directory', '.', tex_file],
            capture_output=True,
            text=True,
            timeout=120  # 2 minute timeout for package installation
        )
        
        # Check output for missing packages
        output_text = result.stdout + result.stderr
        if result.returncode != 0:
            print("First compilation had errors. Checking output...")
            print(f"Return code: {result.returncode}")
            print("\nFull LaTeX output:")
            print("=" * 60)
            print(output_text)
            print("=" * 60)
            
            if 'package' in output_text.lower() or 'not found' in output_text.lower() or 'missing' in output_text.lower():
                print("\nÔÜá´©Å  Missing packages detected!")
                print("MiKTeX needs to install packages. Please run once interactively:")
                print(f"  {pdflatex_path} cv.tex")
                print("This will prompt you to install missing packages.")
                print("After packages are installed, this script will work automatically.")
                return False
        
        # Second run: resolve references
        print("Compiling LaTeX (second pass - resolving references)...")
        result2 = subprocess.run(
            [pdflatex_path, '-interaction=nonstopmode', '-output-directory', '.', tex_file],
            capture_output=True,
            text=True,
            timeout=60
        )
        
        # Show any warnings but continue
        if result2.stderr:
            print("LaTeX warnings (non-critical):")
            print(result2.stderr[:500])  # Show first 500 chars
        
        # Clean up auxiliary files
        base_name = tex_file.replace('.tex', '')
        for ext in ['.aux', '.log', '.out']:
            aux_file = base_name + ext
            if os.path.exists(aux_file):
                try:
                    os.remove(aux_file)
                except:
                    pass
        
        pdf_file = base_name + '.pdf'
        if os.path.exists(pdf_file):
            # On Windows, file names are case-insensitive, so cv.pdf == CV.pdf
            if pdf_file.lower() != output_file.lower():
                shutil.copy(pdf_file, output_file)
            print(f"PDF successfully created: {pdf_file}")
            return True
        return False
    except FileNotFoundError as e:
        print("Error: pdflatex not found. Please install a LaTeX distribution:")
        print("  Windows: https://miktex.org/download")
        print("  macOS: https://www.tug.org/mactex/")
        print("  Linux: sudo apt-get install texlive-full")
        print(f"Details: {e}")
        return False
    except Exception as e:
        print(f"Error compiling LaTeX: {e}")
        print(f"Error type: {type(e).__name__}")
        import traceback
        traceback.print_exc()
        return False

def open_pdf_in_chrome(pdf_path):
    """Open PDF in Chrome"""
    try:
        if platform.system() == 'Windows':
            chrome_paths = [
                r'C:\Program Files\Google\Chrome\Application\chrome.exe',
                r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe',
                os.path.expanduser(r'~\AppData\Local\Google\Chrome\Application\chrome.exe')
            ]
            
            for chrome_path in chrome_paths:
                if os.path.exists(chrome_path):
                    subprocess.Popen([chrome_path, pdf_path])
                    return True
            
            os.startfile(pdf_path)
            return True
        elif platform.system() == 'Darwin':
            subprocess.Popen(['open', '-a', 'Google Chrome', pdf_path])
            return True
        else:
            subprocess.Popen(['google-chrome', pdf_path])
            return True
    except Exception as e:
        print(f"Could not open PDF: {e}")
        return False

if __name__ == '__main__':
    # Parse CV data
    header, sections = parse_cv_data('CV_DATA.txt')
    
    # Generate LaTeX
    latex_code = generate_latex(header, sections)
    
    # Write LaTeX file
    tex_file = 'cv.tex'
    with open(tex_file, 'w', encoding='utf-8') as f:
        f.write(latex_code)
    
    print(f"LaTeX file generated: {tex_file}")
    
    # Compile to PDF
    output_pdf = 'CV.pdf'
    if compile_latex_to_pdf(tex_file, output_pdf):
        print(f"PDF generated successfully: {output_pdf}")
        
        # Copy to public folder
        public_pdf = 'public/CV.pdf'
        shutil.copy(output_pdf, public_pdf)
        print(f"Also copied to {public_pdf}")
        
        # Open in Chrome
        pdf_path = os.path.abspath(output_pdf)
        print(f"Opening PDF in Chrome: {pdf_path}")
        open_pdf_in_chrome(pdf_path)
    else:
        print("\nNote: LaTeX is not installed. The LaTeX file (cv.tex) has been generated.")
        print("You can compile it manually with: pdflatex cv.tex")
