import { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Leaf, Microscope,
  Sprout, BookOpen, FlaskConical, MapPin, Mail, Linkedin, Download,
  ExternalLink, ChevronRight, Flower2, Globe2
} from 'lucide-react'

type Project = {
  id: string; number: string; title: string; category: string; year: string;
  summary: string; role: string; methods: string[]; accent: string;
  background: string; detail: string; imageLabel: string;
}
const projects: Project[] = [
  {
    id: 'xanthomonas', number: '01', title: 'Isolation and Molecular Characterization of Xanthomonas citri Associated with Lime Canker',
    category: 'Plant pathology · Molecular diagnostics', year: '2026',
    summary: 'A plant pathology research project investigating the bacterial pathogen associated with canker symptoms in export lime samples.',
    role: 'Research experience in sample handling, bacterial isolation and characterization, pathogenicity assessment, and molecular diagnostic workflow.',
    methods: ['Lime sample collection and preparation', 'Bacterial isolation and culture', 'Microscopy and biochemical characterization', 'Pathogenicity testing', 'DNA extraction, PCR and gel electrophoresis', 'Sequence preparation and analysis using Chromas, MEGA12 and NCBI BLAST'],
    accent: 'teal', background: 'linear-gradient(135deg,#d9efea,#b9ddd4)', detail: 'This project developed practical exposure to plant disease investigation, from symptomatic plant material to molecular characterization. Add a concise account of the actual study design, confirmed results and your precise contribution before publication.',
    imageLabel: 'Add your lime sample, culture, microscopy and PCR photographs'
  },
  {
    id: 'mustard', number: '02', title: 'Nano-Urea and Nano-DAP in Mustard under Zero-Tillage Conditions',
    category: 'Agronomy · Sustainable crop production', year: '2025–2026',
    summary: 'Field research examining nano-fertilizer treatments in mustard cultivated under a zero-tillage production system.',
    role: 'Research Assistant, Department of Agronomy, Sher-e-Bangla Agricultural University (Oct 2024–Mar 2026).',
    methods: ['Randomized complete block design (RCBD) field trials', 'Plant height, leaf area and biomass measurements', 'SPAD readings and yield assessment', 'Soil pH and nutrient assessment', 'Data organization and analysis using R and Excel'],
    accent: 'gold', background: 'linear-gradient(135deg,#f7e8b9,#e9c86f)', detail: 'The project connected crop nutrition research with resource-conscious field management. Add the exact treatments, replication, location, season and verified findings from your research records.',
    imageLabel: 'Add mustard plots, treatment layout and crop measurement photographs'
  },
  {
    id: 'weed-flora', number: '03', title: 'Weed Flora Diversity and Ethnobotanical Significance on the SAU Campus',
    category: 'Plant ecology · Biodiversity', year: '2025–2026',
    summary: 'A campus-level assessment documenting 87 weed species and examining their occurrence, abundance, distribution and ethnobotanical relevance.',
    role: 'Research contributor: field observations, plant identification and ecological data collection/assessment.',
    methods: ['Field survey and species identification', 'Occurrence, abundance and distribution records', 'Habitat and seasonal observations', 'Biodiversity and diversity-index assessment', 'Documentation of ethnobotanical significance'],
    accent: 'green', background: 'linear-gradient(135deg,#dce9c9,#b6ce91)', detail: 'Repeated observations of weeds across habitats and seasons helped develop an interest in plant communities, ecological patterns and biodiversity. Add the sampling design, diversity indices and verified results.',
    imageLabel: 'Add photographs of identified weed species and survey locations'
  },
  {
    id: 'wheat-stress', number: '04', title: 'Wheat Responses to Combined Salinity and Waterlogging Stress',
    category: 'Plant physiology · Abiotic stress', year: 'Recent contribution',
    summary: 'Contribution to research assessing growth and physiological traits associated with combined salinity and waterlogging tolerance in wheat varieties.',
    role: 'Research contributor: assisted with experimental activities, measurements and data collection. Not the project lead.',
    methods: ['Support for experimental activities', 'Plant growth and physiological measurements', 'Field/laboratory data collection', 'Organization of observations'],
    accent: 'terra', background: 'linear-gradient(135deg,#f2ddd1,#dfa98e)', detail: 'This contribution broadened exposure to multiple abiotic stresses and crop resilience. Add only the specific measurements and activities you personally assisted with.',
    imageLabel: 'Add wheat trial, treatment and measurement photographs'
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
                <div className="photo-orbit orbit-one" /><div className="photo-orbit orbit-two" />
                <div className="portrait-icon"><Sprout size={62} strokeWidth={1} /></div>
                <span className="photo-instruction">YOUR PORTRAIT<br />GOES HERE</span>
                <span className="photo-caption">FIELD NOTES · BANGLADESH</span>
              </div>
              <div className="floating-note note-top"><span className="note-icon"><Microscope size={17} /></span><span>Field & laboratory<br /><b>research experience</b></span></div>
              <div className="floating-note note-bottom"><span className="note-number">87</span><span>Weed species<br /><b>documented</b></span></div>
              <div className="art-stamp">PLANT<br />SCIENCE<br /><span>✳</span></div>
            </div>
            <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="hero-bottom-line" /><span>01 — 08</span></div>
          </section>

          <section className="intro-strip">
            <p>RESEARCH INTERESTS</p>
            <div>Plant science <i>✳</i> Environmental ecology <i>✳</i> Sustainable agriculture <i>✳</i> Plant stress biology</div>
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
            <div className="timeline">
              <div className="timeline-item"><div className="timeline-date">OCT 2024 — MAR 2026</div><div className="timeline-marker" /><div className="timeline-content"><span className="tag tag-gold">AGRONOMY</span><h3>Research Assistant</h3><p className="institution">Department of Agronomy · Sher-e-Bangla Agricultural University</p><p>Contributed to field experiments evaluating nano-urea and nano-DAP in mustard under zero-tillage conditions. Activities included crop growth and yield measurements, soil assessment and data handling.</p><button className="inline-link" onClick={() => setActiveProject(projects[1])}>View related project <ArrowUpRight size={14} /></button></div></div>
              <div className="timeline-item"><div className="timeline-date">2026</div><div className="timeline-marker" /><div className="timeline-content"><span className="tag tag-teal">PLANT PATHOLOGY</span><h3>Plant Pathology Research</h3><p className="institution">Department of Plant Pathology · Sher-e-Bangla Agricultural University</p><p>Worked on investigation of <em>Xanthomonas citri</em> associated with lime canker, gaining experience in bacterial characterization and molecular diagnostic methods.</p><button className="inline-link" onClick={() => setActiveProject(projects[0])}>View related project <ArrowUpRight size={14} /></button></div></div>
              <div className="timeline-item"><div className="timeline-date">2025 — 2026</div><div className="timeline-marker" /><div className="timeline-content"><span className="tag tag-green">PLANT ECOLOGY</span><h3>Weed Diversity & Ethnobotanical Assessment</h3><p className="institution">Sher-e-Bangla Agricultural University campus</p><p>Contributed to documenting 87 weed species and assessing their occurrence, abundance, distribution and ecological and ethnobotanical significance.</p><button className="inline-link" onClick={() => setActiveProject(projects[2])}>View related project <ArrowUpRight size={14} /></button></div></div>
              <div className="timeline-item"><div className="timeline-date">RESEARCH CONTRIBUTION</div><div className="timeline-marker" /><div className="timeline-content"><span className="tag tag-terra">PLANT STRESS</span><h3>Combined Salinity & Waterlogging in Wheat</h3><p className="institution">Research project · Wheat varieties</p><p>Contributed to experimental activities, measurements and data collection in research assessing wheat responses to combined salinity and waterlogging stress.</p><button className="inline-link" onClick={() => setActiveProject(projects[3])}>View related project <ArrowUpRight size={14} /></button></div></div>
            </div>
          </section>

          <section className="section projects-section" id="projects">
            <SectionLabel number="03" title="Selected projects" tag="RESEARCH IN FOCUS" />
            <div className="section-heading-row"><p className="section-intro">A closer look at the questions, methods and practical research experiences that have shaped my interests.</p><span className="count-label">04 PROJECTS <span>↘</span></span></div>
            <div className="project-grid">
              {projects.map(p => <button className={`project-card ${p.accent}`} key={p.id} onClick={() => setActiveProject(p)}>
                <div className="project-visual" style={{background:p.background}}>
                  <div className="project-visual-icon">{p.id === 'xanthomonas' ? <Microscope /> : p.id === 'mustard' ? <Sprout /> : p.id === 'weed-flora' ? <Flower2 /> : <Globe2 />}</div>
                  <span className="project-num">{p.number} / 04</span><span className="visual-caption">IMAGE TO BE ADDED</span>
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
              ].map((x,i)=><div className="lab-step" key={x[0]}><span>{x[0]}</span><div><h3>{x[1]}</h3><p>{x[2]}</p></div><FlaskConical size={19} /></div>)}
              <div className="lab-image-note">ADD AUTHENTIC LAB PHOTOGRAPHS TO THIS SECTION</div>
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
              <FieldCard place="Cox's Bazar" type="Coastal environment" desc="Coastal production systems, salinity-linked challenges and local livelihoods." colour="field-cox" />
              <FieldCard place="Bandarban" type="Forest & agroecosystems" desc="Shifting cultivation, forest landscapes and community relationships with land." colour="field-band" />
            </div>
            <p className="field-disclaimer">Replace these visual placeholders with your own field photographs and add the dates and context of each visit.</p>
          </section>

          <section className="outputs-section" id="outputs">
            <div><span className="eyebrow eyebrow-light">07 / RESEARCH OUTPUTS</span><h2>Research is a<br /><em>work in progress.</em></h2><p>Manuscript information will be added here with accurate titles, author contributions, journal details and publication status.</p></div>
            <div className="output-list"><div><span>01</span><strong>Published</strong><small>Add published work, if applicable.</small></div><div><span>02</span><strong>Submitted / Under review</strong><small>Add verified manuscript details and status.</small></div><div><span>03</span><strong>In preparation</strong><small>Add manuscripts that are being prepared.</small></div></div>
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
      {lightbox && <div className="lightbox" onClick={() => setLightbox(null)}><button aria-label="Close image">×</button><p>{lightbox}</p></div>}
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
    <div className="detail-hero" style={{background:project.background}}><span>PROJECT {project.number} / 04 · {project.year}</span><h1>{project.title}</h1><p>{project.category}</p><div className="detail-art"><Microscope size={64} strokeWidth={0.8}/></div></div>
    <div className="detail-content"><div className="detail-main"><span className="eyebrow">PROJECT OVERVIEW</span><h2>The research<br /><em>in context.</em></h2><p>{project.detail}</p><h3>Research summary</h3><p>{project.summary}</p><h3>My role and contribution</h3><p>{project.role}</p><h3>Methods and techniques</h3><ul>{project.methods.map(m=><li key={m}>{m}</li>)}</ul></div>
      <aside className="detail-aside"><div className="aside-card"><span>PROJECT CATEGORY</span><strong>{project.category}</strong><span>PERIOD</span><strong>{project.year}</strong><span>DOCUMENTATION</span><strong>Photographs and verified outputs to be added</strong></div></aside>
    </div>
    <div className="detail-gallery"><div><span className="eyebrow">VISUAL DOCUMENTATION</span><h2>Research <em>gallery</em></h2><p>{project.imageLabel}</p></div><div className="gallery-placeholder" onClick={()=>onImage(project.imageLabel)} role="button" tabIndex={0}><Sprout size={40}/><span>ADD YOUR AUTHENTIC PROJECT PHOTOGRAPHS HERE</span></div></div>
    <button className="back-link bottom-back" onClick={onBack}>← Return to all projects</button>
  </main>
}
export default App
