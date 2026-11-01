import { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Leaf, Microscope,
  Sprout, BookOpen, FlaskConical, MapPin, Mail, Linkedin, Download,
  Flower2, Globe2
} from 'lucide-react'

type Project = {
  id: string; number: string; title: string; category: string; year: string;
  summary: string; role: string; methods: string[]; accent: string;
  background: string; detail: string; imageLabel: string; photos: string[];
}
const projects: Project[] = [
  {
    id: 'xanthomonas', number: '01',
    title: 'Xanthomonas citri Associated with Lime Canker',
    category: 'Plant pathology · Molecular diagnostics', year: '2026',
    summary: 'A plant pathology investigation of Xanthomonas citri associated with canker symptoms in lime samples.',
    role: 'Plant pathology research experience involving sample handling, bacterial isolation and characterization, pathogenicity assessment, and molecular diagnostic methods.',
    methods: ['Lime sample collection and preparation', 'Bacterial isolation and culture', 'Microscopy and biochemical characterization', 'Pathogenicity assessment', 'DNA extraction, PCR and gel electrophoresis', 'Sequence analysis using Chromas, MEGA12 and NCBI BLAST'],
    accent: 'teal', background: 'linear-gradient(135deg,#d9efea,#b9ddd4)',
    detail: 'This project provided practical experience in plant disease investigation, from symptomatic lime samples and bacterial culture to pathogenicity assessment and molecular analysis. The description is limited to the research activities and techniques you have reported.',
    imageLabel: 'Photographs from lime sample collection, pathogenicity assessment and molecular laboratory work',
    photos: [
      '/images/Me performing Pathogenicity assey for xanthomonas.jpeg',
      '/images/LIME DISEASED WITH XANTHOMONAS CITRI.jpeg',
      '/images/Pathogen culture.jpeg',
      '/images/Result of gel Electrophoresis.jpeg',
      '/images/DNA ISOLATED FROM PURE XANTHOMAS CULTURE.jpeg',
      '/images/setting up gel electrophoresis.jpeg'
    ]
  },
  {
    id: 'mustard', number: '02',
    title: 'Nano-Urea and Nano-DAP in Mustard under Zero Tillage',
    category: 'Agronomy · Sustainable crop production', year: '2024–2026',
    summary: 'Field research evaluating nano-fertilizer treatments in mustard cultivated under zero-tillage conditions.',
    role: 'Research Assistant, Department of Agronomy, Sher-e-Bangla Agricultural University (October 2024–March 2026).',
    methods: ['Randomized complete block design (RCBD) field experiments', 'Plant height, leaf area and biomass measurements', 'SPAD readings and yield assessment', 'Soil pH and nutrient assessment', 'Data organization and handling using R and Excel'],
    accent: 'gold', background: 'linear-gradient(135deg,#f7e8b9,#e9c86f)',
    detail: 'This agronomy research examined nano-urea and nano-DAP treatments in mustard under zero-tillage conditions. Your contribution included field measurements, soil assessment and research data handling.',
    imageLabel: 'Mustard field trials, crop measurements and research team photographs',
    photos: [
      '/images/ME WITH PROFESSOR AND LAB MATES ON MUSTARD FIELD.jpg',
      '/images/MUSTARD INFLOROSCENCE.jpg',
      '/images/ME, MEASURING CHLOROPHYL CONTENT.jpg',
      '/images/SAMPLE COLLECTION FROM FIELD FOR NANO FERTILIZER.jpg',
      '/images/spraying nano urea treatment.jpg'
    ]
  },
  {
    id: 'weed-flora', number: '03',
    title: 'Weed Diversity and Ethnobotanical Assessment on the SAU Campus',
    category: 'Plant ecology · Biodiversity', year: '2025–2026',
    summary: 'A campus-level assessment documenting 87 weed species and examining their occurrence, abundance, distribution and ethnobotanical significance.',
    role: 'Research contributor: field observations, plant identification and ecological data collection and assessment.',
    methods: ['Field survey and species identification', 'Occurrence, abundance and distribution records', 'Habitat and seasonal observations', 'Biodiversity and diversity-index assessment', 'Documentation of ethnobotanical significance'],
    accent: 'green', background: 'linear-gradient(135deg,#dce9c9,#b6ce91)',
    detail: 'The campus weed survey documented 87 species and considered their ecological distribution and ethnobotanical significance. Observations across habitats and seasons helped develop an interest in plant communities and biodiversity patterns.',
    imageLabel: 'Photographs of weed species and field observations from the campus survey',
    photos: [
      '/images/Coix_lacrym FROM WEED SURVEY.jpg',
      '/images/PICTURE OF WEED WHILE SURVEYING WEED FOR WEED DOCUMENTATION.jpg',
      '/images/mutha WEED PICTURE OF WEED WHILE SURVEYING WEED FOR WEED DOCUMENTATION.jpg'
    ]
  }
]
const nav = ['About', 'Research', 'Projects', 'Laboratory', 'Skills', 'Fieldwork', 'CV', 'Contact']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [lightbox, setLightbox] = useState<string | null>(null)

  const goTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  const closeProject = () => setActiveProject(null)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={() => closeProject()}>
          <span className="brand-mark"><Leaf size={19} /></span>
          <span>AR<span className="brand-dot">.</span>R</span>
        </a>
        <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(item => <button key={item} onClick={() => { closeProject(); goTo(item.toLowerCase()) }}>{item}</button>)}
        </nav>
        <a className="top-contact" href="mailto:YOUR.EMAIL@example.com">Get in touch <ArrowUpRight size={15} /></a>
      </header>

      {activeProject ? (
        <ProjectDetail project={activeProject} onBack={closeProject} onImage={setLightbox} />
      ) : (
        <main>
          <section className="hero" id="home">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line" /> ACADEMIC & RESEARCH PORTFOLIO <span className="eyebrow-year">2026 / 27</span></div>
              <h1>Abdur Rahman<br /><em>Remon</em><span className="hero-period">.</span></h1>
              <p className="hero-role">Agriculture Graduate <span>·</span> Early-Career Researcher</p>
              <p className="hero-intro">Exploring plant–environment interactions, crop resilience and ecological systems through field research, laboratory work and data-driven inquiry.</p>
              <div className="hero-actions">
                <button className="button button-dark" onClick={() => goTo('projects')}>Explore my research <ArrowUpRight size={16} /></button>
                <button className="text-link" onClick={() => goTo('about')}>More about me <ArrowDownRight size={16} /></button>
              </div>
              <div className="hero-meta">
                <span><MapPin size={14} /> Dhaka, Bangladesh</span>
                <span><span className="status-dot" /> Open to research opportunities</span>
              </div>
            </div>
            <div className="hero-art">
              <div className="hero-photo-placeholder">
                <img className="hero-portrait" src="/images/Formal Picture Of me.jpeg" alt="Portrait of Abdur Rahman Remon" />
                <div className="photo-orbit orbit-one" /><div className="photo-orbit orbit-two" />
                <div className="portrait-icon"><Sprout size={62} strokeWidth={1} /></div>
                <span className="photo-instruction">PLANTS · PATHOGENS<br />& ECOSYSTEMS</span>
                <span className="photo-caption">RESEARCH NOTES · BANGLADESH</span>
              </div>
              <div className="floating-note note-top"><span className="note-icon"><Microscope size={17} /></span><span>Field & laboratory<br /><b>research experience</b></span></div>
              <div className="floating-note note-bottom"><span className="note-number">87</span><span>Weed species<br /><b>documented</b></span></div>
              <div className="art-stamp">FIELD<br />TO LAB<br /><span>✳</span></div>
            <div className="hero-index-card"><span>RESEARCH PROFILE</span><strong>03</strong><small>CORE AREAS<br />OF EXPERIENCE</small><i>AGRONOMY / PATHOLOGY / ECOLOGY</i></div>
            </div>
            <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="hero-bottom-line" /><span>01 — 08</span></div>
          </section>

          <section className="intro-strip">
            <p>RESEARCH INTERESTS</p>
            <div>Plant science <i>✳</i> Environmental ecology <i>✳</i> Sustainable agriculture <i>✳</i> Biodiversity</div>
          </section>

          <section className="section about-section" id="about">
            <SectionLabel number="01" title="A little about me" tag="BACKGROUND" />
            <div className="about-grid">
              <div className="about-heading"><h2>Curiosity rooted<br />in <em>living systems.</em></h2><div className="decor-leaf"><Flower2 size={76} strokeWidth={0.8} /></div></div>
              <div className="about-body">
                <p className="lead">I am an Agriculture graduate from Sher-e-Bangla Agricultural University, Bangladesh, with research experience spanning agronomy, plant pathology and plant ecology.</p>
                <p>My academic and research experiences have introduced me to field experimentation, plant disease investigation, biodiversity assessment and laboratory-based molecular techniques. I am particularly interested in understanding how plants and ecosystems respond to environmental pressures, and how research can contribute to more sustainable agricultural and ecological systems.</p>
                <div className="credentials">
                  <div><strong>3.43<span>/4.00</span></strong><small>BSc CGPA</small></div>
                  <div><strong>7.5</strong><small>IELTS Academic</small></div>
                  <div><strong>87</strong><small>Weed species documented</small></div>
                </div>
                <p className="micro-note">B.Sc. Agriculture (Honours) · Sher-e-Bangla Agricultural University</p>
              </div>
            </div>
          </section>

          <section className="section research-section" id="research">
            <SectionLabel number="02" title="Research experience" tag="WHERE I'VE WORKED" />
            <p className="section-intro">Three complementary areas of research experience across field experimentation, plant disease investigation and plant ecology.</p>
            <div className="research-grid">
              <article className="research-card">
                <div className="research-image"><img src="/images/ME WITH PROFESSOR AND LAB MATES ON MUSTARD FIELD.jpg" alt="Mustard field research with supervisor and research team" loading="lazy" /><span className="research-number">01</span></div>
                <div className="research-content"><div className="research-meta"><span className="research-category">AGRONOMY</span><span className="research-date">OCT 2024 — MAR 2026</span></div><h3>Research Assistant</h3><p className="research-institution">Department of Agronomy · Sher-e-Bangla Agricultural University</p><p className="research-description">Contributed to field experiments evaluating nano-urea and nano-DAP in mustard under zero-tillage conditions. Activities included crop growth and yield measurements, soil assessment and data handling.</p><button className="inline-link" onClick={() => setActiveProject(projects[1])}>View related project <ArrowUpRight size={14} /></button></div>
              </article>
              <article className="research-card">
                <div className="research-image"><img src="/images/Me performing Pathogenicity assey for xanthomonas.jpeg" alt="Pathogenicity assay during lime canker research" loading="lazy" /><span className="research-number">02</span></div>
                <div className="research-content"><div className="research-meta"><span className="research-category">PLANT PATHOLOGY</span><span className="research-date">2026</span></div><h3>Plant Pathology Research</h3><p className="research-institution">Department of Plant Pathology · Sher-e-Bangla Agricultural University</p><p className="research-description">Worked on investigation of <em>Xanthomonas citri</em> associated with lime canker, gaining experience in bacterial characterization, pathogenicity assessment and molecular diagnostic methods.</p><button className="inline-link" onClick={() => setActiveProject(projects[0])}>View related project <ArrowUpRight size={14} /></button></div>
              </article>
              <article className="research-card">
                <div className="research-image"><img src="/images/Coix_lacrym FROM WEED SURVEY.jpg" alt="Plant specimen documented during weed diversity survey" loading="lazy" /><span className="research-number">03</span></div>
                <div className="research-content"><div className="research-meta"><span className="research-category">PLANT ECOLOGY</span><span className="research-date">2025 — 2026</span></div><h3>Weed Diversity & Ethnobotanical Assessment</h3><p className="research-institution">Sher-e-Bangla Agricultural University campus</p><p className="research-description">Contributed to documenting 87 weed species and assessing their occurrence, abundance, distribution, ecological patterns and ethnobotanical significance.</p><button className="inline-link" onClick={() => setActiveProject(projects[2])}>View related project <ArrowUpRight size={14} /></button></div>
              </article>
            </div>
          </section>

          <section className="section projects-section" id="projects">
            <SectionLabel number="03" title="Selected projects" tag="RESEARCH IN FOCUS" />
            <div className="section-heading-row"><p className="section-intro">A closer look at the questions, methods and practical research experiences that have shaped my interests.</p><span className="count-label">{projects.length.toString().padStart(2, '0')} PROJECTS <span>↘</span></span></div>
            <div className="project-grid">
              {projects.map(p => <button className={`project-card ${p.accent}`} key={p.id} onClick={() => setActiveProject(p)}>
                <div className="project-visual" style={{background:p.background}}>
                  <img className="project-cover" src={p.photos[0]} alt={`${p.title} research photograph`} loading="lazy" />
                  <span className="project-num">{p.number} / {String(projects.length).padStart(2, '0')}</span><span className="visual-caption">FIELD & LAB DOCUMENTATION</span>
                  <span className="project-arrow"><ArrowUpRight size={20} /></span>
                </div>
                <div className="project-card-body"><div className="project-category">{p.category}</div><h3>{p.title}</h3><p>{p.summary}</p><span className="card-read">Explore project <ArrowRight size={14} /></span></div>
              </button>)}
            </div>
          </section>

          <section className="lab-section" id="laboratory">
            <div className="lab-left"><SectionLabel number="04" title="Inside the laboratory" tag="PRACTICAL EXPERIENCE" light /><h2>From sample<br />to <em>sequence.</em></h2><p>My plant pathology research introduced me to a connected workflow of pathogen investigation, laboratory characterization and molecular analysis.</p><button className="button button-light" onClick={() => setActiveProject(projects[0])}>Explore the workflow <ArrowUpRight size={16} /></button><div className="lab-footnote">TECHNIQUES LISTED REFLECT RESEARCH EXPOSURE; INDIVIDUAL CONTRIBUTIONS SHOULD BE SPECIFIED.</div></div>
            <div className="lab-right">
              {[
                ['01','Bacterial isolation','Sample preparation · Isolation · Culture'],
                ['02','Characterization','Microscopy · Biochemical tests · Pathogenicity'],
                ['03','Molecular methods','DNA extraction · PCR · Gel electrophoresis'],
                ['04','Sequence analysis','Chromas · MEGA12 · NCBI BLAST']
              ].map((x)=><div className="lab-step" key={x[0]}><span>{x[0]}</span><div><h3>{x[1]}</h3><p>{x[2]}</p></div><FlaskConical size={19} /></div>)}
              <div className="lab-photo-grid"><img src="/images/a good picture of me working in advanced molecular lab.jpeg" alt="Working in the advanced molecular laboratory" loading="lazy" /><img src="/images/ADDING BUFFER IN RNA EXTRACTION PROCESS.jpeg" alt="Adding buffer during RNA extraction" loading="lazy" /></div>
            </div>
          </section>

          <section className="section skills-section" id="skills">
            <SectionLabel number="05" title="Methods & skills" tag="TOOLS OF THE TRADE" />
            <p className="section-intro">A developing toolkit built through coursework, field activities and research practice.</p>
            <div className="skills-grid">
              <Skill icon={<FlaskConical />} title="Laboratory & molecular" items="DNA extraction · PCR · Gel electrophoresis · Microscopy · Biochemical characterization · Sterile techniques" />
              <Skill icon={<Sprout />} title="Field & crop research" items="RCBD field trials · Crop growth measurements · Plant sampling · Species identification · Field data collection" />
              <Skill icon={<Globe2 />} title="Soil & environment" items="Soil pH · EC · NPK · Organic matter · Soil physical properties · Ecological observations" />
              <Skill icon={<BookOpen />} title="Data & bioinformatics" items="R · Microsoft Excel · Chromas · MEGA12 · NCBI BLAST" />
            </div>
          </section>

          <section className="section field-section" id="fieldwork">
            <SectionLabel number="06" title="Learning beyond the lab" tag="FIELD NOTES" />
            <p className="section-intro">Field visits across Bangladesh offered perspectives on the relationships between landscapes, biodiversity, livelihoods and resource management.</p>
            <div className="field-grid">
              <FieldCard place="Sundarbans" type="Mangrove ecology" desc="Mangrove ecosystems, restoration, biodiversity and coastal protection." colour="field-sundar" />
              <FieldCard place="Cox's Bazar" type="Coastal environment" desc="Coastal production systems, environmental challenges and local livelihoods." colour="field-cox" />
              <FieldCard place="Bandarban" type="Forest & agroecosystems" desc="Shifting cultivation, forest landscapes and community relationships with land." colour="field-band" />
            </div>
            <p className="field-disclaimer">Replace these visual placeholders with your own field photographs and add the dates and context of each visit.</p>
          </section>

          <section className="outputs-section" id="outputs">
            <div className="outputs-intro">
              <span className="eyebrow eyebrow-light">07 / RESEARCH OUTPUTS</span>
              <h2>From field notes<br />to <em>research papers.</em></h2>
              <p>Research outputs are presented according to their current stage. Publication status is stated conservatively and will be updated as each manuscript progresses.</p>
              <div className="outputs-footnote"><span className="status-pulse" /> STATUS CHECKED · NOVEMBER 2026</div>
            </div>
            <div className="output-list">
              <article className="output-item output-ready">
                <div className="output-index">01</div>
                <div className="output-copy"><span className="output-status">READY FOR JOURNAL SUBMISSION</span><h3>Weed flora diversity and ethnobotanical significance on the SAU campus</h3><p>The study documenting 87 weed species is prepared for journal submission. It has not yet been submitted.</p></div>
                <div className="output-mark">↗</div>
              </article>
              <article className="output-item output-prep">
                <div className="output-index">03</div>
                <div className="output-copy"><span className="output-status">IN PREPARATION</span><h3>Other research manuscripts</h3><p>Manuscripts arising from the other research projects are currently under preparation. Titles, author contributions and journal information will be added when verified.</p></div>
                <div className="output-mark">✳</div>
              </article>
            </div>
          </section>

          <section className="section cv-section" id="cv">
            <div className="cv-icon"><Download size={26} /></div><div><span className="eyebrow">08 / CURRICULUM VITAE</span><h2>Want the full picture?</h2><p>Download my academic CV for a concise overview of my education, research experience, skills and training.</p></div>
            <a className="button button-dark" href="/Remon_Academic_CV.pdf" download>Download CV <Download size={16} /></a>
            <span className="cv-note">ADD YOUR PDF AS <code>public/Remon_Academic_CV.pdf</code></span>
          </section>

          <footer className="footer" id="contact">
            <div className="footer-top"><div><span className="eyebrow eyebrow-light">LET'S CONNECT</span><h2>Good research<br />starts with a <em>conversation.</em></h2></div><a className="footer-mail" href="mailto:YOUR.EMAIL@example.com">YOUR.EMAIL@example.com <ArrowUpRight /></a></div>
            <div className="footer-bottom"><span>© 2026 ABDUR RAHMAN REMON</span><span>ACADEMIC & RESEARCH PORTFOLIO</span><div><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href="mailto:YOUR.EMAIL@example.com"><Mail size={17} /> Email</a></div></div>
          </footer>
        </main>
      )}
      {lightbox && <div className="lightbox" onClick={() => setLightbox(null)}><button aria-label="Close image">×</button><img src={lightbox} alt="Expanded research photograph" /></div>}
    </div>
  )
}

function SectionLabel({number,title,tag,light=false}:{number:string,title:string,tag:string,light?:boolean}) {
  return <div className={`section-label ${light?'light':''}`}><span>{number} <i>—</i> {tag}</span><h2>{title}</h2></div>
}
function Skill({icon,title,items}:{icon:React.ReactNode,title:string,items:string}) {
  return <div className="skill-card"><div className="skill-icon">{icon}</div><h3>{title}</h3><p>{items}</p></div>
}
function FieldCard({place,type,desc,colour}:{place:string,type:string,desc:string,colour:string}) {
  return <div className={`field-card ${colour}`}><div className="field-symbol"><Leaf size={35} strokeWidth={1} /></div><span>{type}</span><h3>{place}</h3><p>{desc}</p><small>FIELD PHOTOGRAPH TO BE ADDED</small></div>
}
function ProjectDetail({project,onBack,onImage}:{project:Project,onBack:()=>void,onImage:(s:string)=>void}) {
  return <main className="detail-page">
    <button className="back-link" onClick={onBack}>← Back to portfolio</button>
    <div className="detail-hero" style={{background:project.background}}><span>PROJECT {project.number} / {String(projects.length).padStart(2, '0')} · {project.year}</span><h1>{project.title}</h1><p>{project.category}</p><div className="detail-art"><Microscope size={64} strokeWidth={0.8}/></div></div>
    <div className="detail-content"><div className="detail-main"><span className="eyebrow">PROJECT OVERVIEW</span><h2>The research<br /><em>in context.</em></h2><p>{project.detail}</p><h3>Research summary</h3><p>{project.summary}</p><h3>My role and contribution</h3><p>{project.role}</p><h3>Methods and techniques</h3><ul>{project.methods.map(m=><li key={m}>{m}</li>)}</ul></div>
      <aside className="detail-aside"><div className="aside-card"><span>PROJECT CATEGORY</span><strong>{project.category}</strong><span>PERIOD</span><strong>{project.year}</strong><span>DOCUMENTATION</span><strong>Photographs and verified outputs to be added</strong></div></aside>
    </div>
    <div className="detail-gallery"><div><span className="eyebrow">VISUAL DOCUMENTATION</span><h2>Research <em>gallery</em></h2><p>{project.imageLabel}</p></div><div className="detail-photo-grid">{project.photos.map((photo) => <img key={photo} src={photo} alt={`${project.title} documentation`} loading="lazy" onClick={() => onImage(photo)} />)}</div></div>
    <button className="back-link bottom-back" onClick={onBack}>← Return to all projects</button>
  </main>
}
export default App
