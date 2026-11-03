import React, { useState } from 'react'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Leaf, Microscope,
  Sprout, BookOpen, FlaskConical, MapPin, Mail, Linkedin, Download,
  Flower2, Globe2, Waves, Trees, Presentation
} from 'lucide-react'

type Project = {
  id: string
  number: string
  title: string
  category: string
  year: string
  summary: string
  role: string
  methods: string[]
  accent: string
  background: string
  detail: string
  imageLabel: string
  photos: string[]
}

const projects: Project[] = [
  {
    id: 'xanthomonas',
    number: '01',
    title: 'Xanthomonas citri Associated with Lime Canker',
    category: 'Plant pathology · Molecular diagnostics',
    year: '2026',
    summary: 'A plant pathology investigation of Xanthomonas citri associated with canker symptoms in lime samples.',
    role: 'Plant pathology research experience involving sample handling, bacterial isolation and characterization, pathogenicity assessment, and molecular diagnostic methods.',
    methods: [
      'Lime sample collection and preparation',
      'Bacterial isolation and culture',
      'Microscopy and biochemical characterization',
      'Pathogenicity assessment',
      'DNA extraction, PCR and gel electrophoresis',
      'Sequence analysis using Chromas, MEGA12 and NCBI BLAST'
    ],
    accent: 'teal',
    background: 'linear-gradient(135deg,#d9efea,#b9ddd4)',
    detail: 'This project provided practical experience in plant disease investigation, from symptomatic lime samples and bacterial culture to pathogenicity assessment and molecular analysis. The description is limited to the research activities and techniques reported.',
    imageLabel: 'Photographs from lime sample collection, pathogenicity assessment and molecular laboratory work',
    photos: [
      '/images/Me performing Pathogenicity assey for xanthomonas.jpeg',
      '/images/LIME DISEASED WITH XANTHOMONAS CITRI.jpeg',
      '/images/Pathogen culture.jpeg',
      '/images/Result of gel Electrophoresis.jpeg',
      '/images/DNA ISOLATED FROM PURE XANTHOMAS CULTURE.jpeg',
      '/images/setting up gel electrophoresis.jpeg',
      '/images/Isolated dna for amplification3.jpeg',
      '/images/ME USING PCR FOR DNA AMPLIFICATION .jpeg',
      '/images/SETTING SAMPLES INSIDE CENTRIFUGING MECHINE.jpeg',
      '/images/fresh lime used for experiment.jpeg',
      '/images/injecting pathogen on lime .jpeg',
      '/images/ME USING CENTRIFUGING MECHINE IN LAB.jpeg'
    ]
  },
  {
    id: 'mustard',
    number: '02',
    title: 'Nano-Urea and Nano-DAP in Mustard under Zero Tillage',
    category: 'Agronomy · Sustainable crop production',
    year: '2024–2026',
    summary: 'Field research evaluating nano-fertilizer treatments in mustard cultivated under zero-tillage conditions.',
    role: 'Research Assistant, Department of Agronomy, Sher-e-Bangla Agricultural University (October 2024–March 2026).',
    methods: [
      'Randomized complete block design (RCBD) field experiments',
      'Plant height, leaf area and biomass measurements',
      'SPAD readings and yield assessment',
      'Soil pH and nutrient assessment',
      'Data organization and handling using R and Excel'
    ],
    accent: 'gold',
    background: 'linear-gradient(135deg,#f7e8b9,#e9c86f)',
    detail: 'This agronomy research examined nano-urea and nano-DAP treatments in mustard under zero-tillage conditions. Contributions included field measurements, soil assessment and research data handling.',
    imageLabel: 'Mustard field trials, crop measurements and research team photographs',
    photos: [
      '/images/ME WITH PROFESSOR AND LAB MATES ON MUSTARD FIELD.jpg',
      '/images/MUSTARD INFLOROSCENCE.jpg',
      '/images/ME, MEASURING CHLOROPHYL CONTENT.jpg',
      '/images/SAMPLE COLLECTION FROM FIELD FOR NANO FERTILIZER.jpg',
      '/images/spraying nano urea treatment.jpg',
      '/images/ME WORKING IN FIELD.jpg'
    ]
  },
  {
    id: 'weed-flora',
    number: '03',
    title: 'Weed Diversity and Ethnobotanical Assessment on the SAU Campus',
    category: 'Plant ecology · Biodiversity',
    year: '2025–2026',
    summary: 'A campus-level assessment documenting weed diversity and examining occurrence, abundance, distribution and ethnobotanical significance.',
    role: 'Research contributor: field observations, plant identification and ecological data collection and assessment.',
    methods: [
      'Field survey and species identification',
      'Occurrence, abundance and distribution records',
      'Habitat and seasonal observations',
      'Biodiversity and diversity-index assessment',
      'Documentation of ethnobotanical significance'
    ],
    accent: 'green',
    background: 'linear-gradient(135deg,#dce9c9,#b6ce91)',
    detail: 'The campus weed survey considered species diversity, ecological distribution and ethnobotanical significance. Observations across habitats and seasons helped develop an interest in plant communities and biodiversity patterns.',
    imageLabel: 'Photographs of weed species and field observations from the campus survey',
    photos: [
      '/images/Coix_lacrym FROM WEED SURVEY.jpg',
      '/images/PICTURE OF WEED WHILE SURVEYING WEED FOR WEED DOCUMENTATION.jpg',
      '/images/mutha WEED PICTURE OF WEED WHILE SURVEYING WEED FOR WEED DOCUMENTATION.jpg'
    ]
  }
]

const fieldTrips = [
  {
    place: 'Sundarbans',
    label: 'MANGROVE LANDSCAPE',
    className: 'field-sundar',
    icon: <Trees size={30} strokeWidth={1.2}/>,
    text: 'The mangrove landscape offered a field perspective on the links between biodiversity, ecological restoration and coastal protection. Seeing the forest in its landscape context reinforced how ecosystem integrity supports both environmental resilience and people living along the coast.',
    images: [
      '/images/me with my lab mates visiting mangrove forest on field trip.JPG'
    ]
  },
  {
    place: "Cox's Bazar",
    label: 'COASTAL ENVIRONMENT',
    className: 'field-cox',
    icon: <Waves size={30} strokeWidth={1.2}/>,
    text: 'The coastal visit connected environmental conditions with production systems and livelihoods. A visit to the Bangladesh Fisheries Research Institute added an institutional perspective on research in coastal and fisheries settings, complementing observations of the wider coastal environment.',
    images: [
      '/images/visited Bangladesh Fish Research Institude on cox bazar field trip.jpeg'
    ]
  },
  {
    place: 'Bandarban',
    label: 'HILLS, FORESTS & LAND USE',
    className: 'field-band',
    icon: <Leaf size={30} strokeWidth={1.2}/>,
    text: 'Bandarban brought together observations of forest landscapes, shifting cultivation and community relationships with land. Visiting a hilly cotton research area also offered a crop-research perspective within a distinct terrain and production context.',
    images: [
      '/images/GROUP PICTURE ON BANDARBON TRIP.jpg',
      '/images/SENIC BEAUTY ON BANDARBAN FIELD TRIP.jpg',
      '/images/VISITED HILLY COTTON RESEARCH AREA ON BANDRBON FIELD TRIP.jpg',
      '/images/WAY OF PEOPLE WORKING AND DIVERSITY ON BANDARBAN.jpg'
    ]
  }
]

const nav = [
  'About',
  'Research',
  'Projects',
  'Laboratory',
  'Skills',
  'Fieldwork',
  'Presentations',
  'Outputs',
  'CV',
  'Contact'
]

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
        <a className="brand" href="#home" onClick={closeProject}>
          <span className="brand-mark"><Leaf size={19}/></span>
          <span>AR<span className="brand-dot">.</span>R</span>
        </a>

        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X/> : <Menu/>}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(item => (
            <button
              key={item}
              onClick={() => {
                closeProject()
                goTo(item.toLowerCase())
              }}
            >
              {item}
            </button>
          ))}
        </nav>

        <a className="top-contact" href="mailto:abdurremon08@gmail.com">
          Get in touch <ArrowUpRight size={15}/>
        </a>
      </header>

      {activeProject ? (
        <ProjectDetail
          project={activeProject}
          onBack={closeProject}
          onImage={setLightbox}
        />
      ) : (

        <main>

          {/* HERO SECTION */}

          <section className="hero" id="home">

            <div className="hero-copy">

              <div className="eyebrow">
                <span className="eyebrow-line"/>
                ACADEMIC & RESEARCH PORTFOLIO
                <span className="eyebrow-year">2026 / 27</span>
              </div>

              <h1>
                Abdur Rahman<br/>
                <em>Remon</em>
                <span className="hero-period">.</span>
              </h1>

              <p className="hero-role">
                Agriculture Graduate <span>·</span> Early-Career Researcher
              </p>

              <p className="hero-intro">
                Exploring plant–environment interactions, crop resilience
                and ecological systems through field research, laboratory
                work and data-driven inquiry.
              </p>

              <div className="hero-actions">
                <button
                  className="button button-dark"
                  onClick={() => goTo('projects')}
                >
                  Explore my research <ArrowUpRight size={16}/>
                </button>

                <button
                  className="text-link"
                  onClick={() => goTo('about')}
                >
                  More about me <ArrowDownRight size={16}/>
                </button>
              </div>

              <div className="hero-meta">
                <span><MapPin size={14}/> Dhaka, Bangladesh</span>
                <span><span className="status-dot"/> Open to research opportunities</span>
              </div>

            </div>

            {/* DIGITAL RESEARCHER PORTRAIT */}

            <div className="hero-art digital-hero-art">

              <div className="digital-frame">

                <div className="digital-frame-top">
                  <span className="digital-live">
                    <i></i> RESEARCHER PROFILE
                  </span>

                  <span className="digital-code">
                    AR.R / 2026–27
                  </span>
                </div>

                <div className="digital-photo">

                  <img
                    className="hero-portrait"
                    src="/images/Formal Picture Of me.jpeg"
                    alt="Abdur Rahman Remon — Academic and Researcher"
                  />

                  <div className="photo-overlay"></div>

                  <div className="photo-coordinate">
                    DHAKA, BANGLADESH
                  </div>

                  <div className="photo-label">
                    <span>01 / PROFILE IMAGE</span>
                    <strong>AB. RAHMAN REMON</strong>
                    <small>AGRICULTURAL SCIENCES</small>
                  </div>

                </div>

                <div className="digital-frame-bottom">
                  <div>
                    <span className="digital-bottom-label">
                      RESEARCH DOMAINS
                    </span>
                    <strong>
                      AGRONOMY / PATHOLOGY / ECOLOGY
                    </strong>
                  </div>

                  <div className="digital-signal">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                </div>

                <span className="digital-corner corner-tl"></span>
                <span className="digital-corner corner-tr"></span>
                <span className="digital-corner corner-bl"></span>
                <span className="digital-corner corner-br"></span>

              </div>

              <div className="digital-side-label">
                ACADEMIC PORTFOLIO — BANGLADESH
              </div>

            </div>

            <div className="hero-bottom">
              <span>SCROLL TO EXPLORE</span>
              <span className="hero-bottom-line"/>
              <span>01 — 10</span>
            </div>

          </section>

          {/* INTRODUCTION STRIP */}

          <section className="intro-strip">
            <p>RESEARCH INTERESTS</p>
            <div>
              Plant science <i>✳</i>
              Environmental ecology <i>✳</i>
              Sustainable agriculture <i>✳</i>
              Biodiversity
            </div>
          </section>

          {/* ABOUT SECTION */}

          <section className="section about-section" id="about">

            <SectionLabel
              number="01"
              title="A little about me"
              tag="BACKGROUND"
            />

            <div className="about-grid">

              <div className="about-heading">
                <h2>
                  Curiosity rooted<br/>
                  in <em>living systems.</em>
                </h2>

                <div className="decor-leaf">
                  <Flower2 size={76} strokeWidth={0.8}/>
                </div>
              </div>

              <div className="about-body">

                <p className="lead">
                  I am an Agriculture graduate from Sher-e-Bangla
                  Agricultural University, Bangladesh, with research
                  experience spanning agronomy, plant pathology and
                  plant ecology.
                </p>

                <p>
                  My academic and research experiences have introduced
                  me to field experimentation, plant disease investigation,
                  biodiversity assessment and laboratory-based molecular
                  techniques. I am particularly interested in understanding
                  how plants and ecosystems respond to environmental
                  pressures, and how research can contribute to more
                  sustainable agricultural and ecological systems.
                </p>

                <p className="micro-note">
                  B.Sc. Agriculture (Honours) · Sher-e-Bangla Agricultural University
                </p>

              </div>

            </div>

            {/* IELTS CARD */}

            <div className="ielts-card">

              <div className="ielts-heading">

                <span className="eyebrow">
                  ENGLISH LANGUAGE PROFICIENCY
                </span>

                <h3>IELTS <em>Academic</em></h3>

                <div className="ielts-overall">
                  <strong>7.5</strong>
                  <span>OVERALL BAND</span>
                </div>

              </div>

              <div className="ielts-scores">

                {([
                  ['Reading', 9],
                  ['Listening', 7.5],
                  ['Writing', 6.5],
                  ['Speaking', 6.5]
                ] as [string, number][]).map(([skill, score]) => (

                  <div className="ielts-row" key={skill}>
                    <span>{skill}</span>

                    <div className="ielts-track">
                      <i style={{ width: `${Number(score) / 9 * 100}%` }}/>
                    </div>

                    <strong>{score.toFixed(1)}</strong>
                  </div>

                ))}

              </div>

              <div className="ielts-foot">
                IELTS Academic · Band scale: 0–9
              </div>

            </div>

          </section>

          {/* RESEARCH EXPERIENCE */}

          <section className="section research-section" id="research">

            <SectionLabel
              number="02"
              title="Research experience"
              tag="WHERE I'VE WORKED"
            />

            <p className="section-intro">
              Three complementary areas of research experience across
              field experimentation, plant disease investigation and
              plant ecology.
            </p>

            <div className="research-grid">

              <ResearchCard
                number="01"
                category="AGRONOMY"
                date="OCT 2024 — MAR 2026"
                image="/images/ME WITH PROFESSOR AND LAB MATES ON MUSTARD FIELD.jpg"
                alt="Mustard field research with supervisor and research team"
                title="Research Assistant"
                institution="Department of Agronomy · Sher-e-Bangla Agricultural University"
                description="Contributed to field experiments evaluating nano-urea and nano-DAP in mustard under zero-tillage conditions. Activities included crop growth and yield measurements, soil assessment and data handling."
                onClick={() => setActiveProject(projects[1])}
              />

              <ResearchCard
                number="02"
                category="PLANT PATHOLOGY"
                date="2026"
                image="/images/Me performing Pathogenicity assey for xanthomonas.jpeg"
                alt="Pathogenicity assay during lime canker research"
                title="Plant Pathology Research"
                institution="Department of Plant Pathology · Sher-e-Bangla Agricultural University"
                description={
                  <>
                    Worked on investigation of <em>Xanthomonas citri</em>
                    {' '}associated with lime canker, gaining experience
                    in bacterial characterization, pathogenicity
                    assessment and molecular diagnostic methods.
                  </>
                }
                onClick={() => setActiveProject(projects[0])}
              />

              <ResearchCard
                number="03"
                category="PLANT ECOLOGY"
                date="2025 — 2026"
                image="/images/Coix_lacrym FROM WEED SURVEY.jpg"
                alt="Plant specimen documented during weed diversity survey"
                title="Weed Diversity & Ethnobotanical Assessment"
                institution="Sher-e-Bangla Agricultural University campus"
                description="Contributed to documenting weed diversity and assessing occurrence, abundance, distribution, ecological patterns and ethnobotanical significance."
                onClick={() => setActiveProject(projects[2])}
              />

            </div>

          </section>

          {/* SELECTED PROJECTS */}

          <section className="section projects-section" id="projects">

            <SectionLabel
              number="03"
              title="Selected projects"
              tag="RESEARCH IN FOCUS"
            />

            <div className="section-heading-row">

              <p className="section-intro">
                A closer look at the questions, methods and practical
                research experiences that have shaped my interests.
              </p>

              <span className="count-label">
                03 PROJECTS <span>↘</span>
              </span>

            </div>

            <div className="project-grid">

              {projects.map(p => (

                <button
                  className={`project-card ${p.accent}`}
                  key={p.id}
                  onClick={() => setActiveProject(p)}
                >

                  <div
                    className="project-visual"
                    style={{ background: p.background }}
                  >

                    <img
                      className="project-cover"
                      src={p.photos[0]}
                      alt={`${p.title} research photograph`}
                      loading="lazy"
                    />

                    <span className="project-num">
                      {p.number} / 03
                    </span>

                    <span className="visual-caption">
                      FIELD & LAB DOCUMENTATION
                    </span>

                    <span className="project-arrow">
                      <ArrowUpRight size={20}/>
                    </span>

                  </div>

                  <div className="project-card-body">

                    <div className="project-category">
                      {p.category}
                    </div>

                    <h3>{p.title}</h3>

                    <p>{p.summary}</p>

                    <span className="card-read">
                      Explore project <ArrowRight size={14}/>
                    </span>

                  </div>

                </button>

              ))}

            </div>

          </section>

          {/* LABORATORY SECTION */}

          <section className="lab-section" id="laboratory">

            <div className="lab-left">

              <SectionLabel
                number="04"
                title="Inside the laboratory"
                tag="PRACTICAL EXPERIENCE"
                light
              />

              <h2>
                From sample<br/>
                to <em>sequence.</em>
              </h2>

              <p>
                My plant pathology research introduced me to a connected
                workflow of pathogen investigation, laboratory
                characterization and molecular analysis.
              </p>

              <button
                className="button button-light"
                onClick={() => setActiveProject(projects[0])}
              >
                Explore the workflow <ArrowUpRight size={16}/>
              </button>

              <div className="lab-footnote">
                TECHNIQUES LISTED REFLECT RESEARCH EXPOSURE;
                INDIVIDUAL CONTRIBUTIONS SHOULD BE SPECIFIED.
              </div>

            </div>

            <div className="lab-right">

              {[
                ['01', 'Bacterial isolation', 'Sample preparation · Isolation · Culture'],
                ['02', 'Characterization', 'Microscopy · Biochemical tests · Pathogenicity'],
                ['03', 'Molecular methods', 'DNA extraction · PCR · Gel electrophoresis'],
                ['04', 'Sequence analysis', 'Chromas · MEGA12 · NCBI BLAST']
              ].map(x => (

                <div className="lab-step" key={x[0]}>
                  <span>{x[0]}</span>

                  <div>
                    <h3>{x[1]}</h3>
                    <p>{x[2]}</p>
                  </div>

                  <FlaskConical size={19}/>
                </div>

              ))}

              <div className="lab-photo-grid">

                <img
                  src="/images/a good picture of me working in advanced molecular lab.jpeg"
                  alt="Working in the advanced molecular laboratory"
                  loading="lazy"
                />

                <img
                  src="/images/ADDING BUFFER IN RNA EXTRACTION PROCESS.jpeg"
                  alt="Adding buffer during RNA extraction"
                  loading="lazy"
                />

                <img
                  src="/images/Working in Agronomy lab.jpg"
                  alt="Working in the agronomy laboratory"
                  loading="lazy"
                />

                <img
                  src="/images/ME USING PCR FOR DNA AMPLIFICATION .jpeg"
                  alt="PCR amplification laboratory work"
                  loading="lazy"
                />

              </div>

            </div>

          </section>

          {/* SKILLS */}

          <section className="section skills-section" id="skills">

            <SectionLabel
              number="05"
              title="Methods & skills"
              tag="TOOLS OF THE TRADE"
            />

            <p className="section-intro">
              A developing toolkit built through coursework, field
              activities and research practice.
            </p>

            <div className="skills-grid">

              <Skill
                icon={<FlaskConical/>}
                title="Laboratory & molecular"
                items="DNA extraction · PCR · Gel electrophoresis · Microscopy · Biochemical characterization · Sterile techniques"
              />

              <Skill
                icon={<Sprout/>}
                title="Field & crop research"
                items="RCBD field trials · Crop growth measurements · Plant sampling · Species identification · Field data collection"
              />

              <Skill
                icon={<Globe2/>}
                title="Soil & environment"
                items="Soil pH · EC · NPK · Organic matter · Soil physical properties · Ecological observations"
              />

              <Skill
                icon={<BookOpen/>}
                title="Data & bioinformatics"
                items="R · Microsoft Excel · Chromas · MEGA12 · NCBI BLAST"
              />

            </div>

          </section>

          {/* FIELDWORK */}

          <section className="section field-section" id="fieldwork">

            <SectionLabel
              number="06"
              title="Learning beyond the lab"
              tag="FIELD NOTES"
            />

            <p className="section-intro">
              Field visits across Bangladesh offered perspectives on
              the relationships between landscapes, biodiversity,
              livelihoods and resource management.
            </p>

            <div className="field-grid">

              {fieldTrips.map(trip => (
                <FieldCard
                  key={trip.place}
                  trip={trip}
                  onImage={setLightbox}
                />
              ))}

            </div>

            <p className="field-disclaimer">
              Field reflections are based on educational visits and
              observations; they are not presented as formal ecological surveys.
            </p>

          </section>

          {/* ACADEMIC PRESENTATIONS */}

          <section
            className="section presentations-section"
            id="presentations"
          >

            <SectionLabel
              number="07"
              title="Academic presentations"
              tag="PRESENTATION ARCHIVE"
            />

            <div className="presentation-feature">

              <div className="presentation-icon">
                <Presentation size={42} strokeWidth={1}/>
              </div>

              <div>

                <span className="eyebrow">
                  ARCHIVE IN PROGRESS
                </span>

                <h3>Academic Presentation Archive</h3>

                <p>
                  I am currently organizing and updating this section
                  with selected academic presentations delivered during
                  my undergraduate studies. Presentation slides and
                  supporting materials will be added soon.
                </p>

                <span className="coming-soon">
                  COMING SOON <span>↗</span>
                </span>

              </div>

              <div className="presentation-side">

                <div className="presentation-mini">
                  <span>01</span>
                  <div>
                    <strong>Topic thumbnails</strong>
                    <small>Will be added with verified titles</small>
                  </div>
                </div>

                <div className="presentation-mini">
                  <span>02</span>
                  <div>
                    <strong>Slide previews</strong>
                    <small>Selected materials, where appropriate</small>
                  </div>
                </div>

                <div className="presentation-mini">
                  <span>03</span>
                  <div>
                    <strong>Academic context</strong>
                    <small>Course / event details to follow</small>
                  </div>
                </div>

              </div>

            </div>

          </section>

          {/* RESEARCH OUTPUTS */}

          <section className="outputs-section" id="outputs">

            <div className="outputs-intro">

              <span className="eyebrow eyebrow-light">
                08 / RESEARCH OUTPUTS
              </span>

              <h2>
                From field notes<br/>
                to <em>research papers.</em>
              </h2>

              <p>
                Research outputs are presented according to their
                current stage. Publication status is stated
                conservatively and will be updated as each
                manuscript progresses.
              </p>

              <div className="outputs-footnote">
                <span className="status-pulse"/>
                STATUS CHECKED · NOVEMBER 2026
              </div>

            </div>

            <div className="output-list">

              <article className="output-item output-ready">

                <div className="output-index">01</div>

                <div className="output-copy">

                  <span className="output-status">
                    READY FOR JOURNAL SUBMISSION
                  </span>

                  <h3>
                    Weed flora diversity and ethnobotanical significance
                    on the SAU campus
                  </h3>

                  <p>
                    The study is prepared for journal submission;
                    it has not yet been submitted.
                  </p>

                </div>

                <div className="output-mark">↗</div>

              </article>

              <article className="output-item output-prep">

                <div className="output-index">02</div>

                <div className="output-copy">

                  <span className="output-status">
                    IN PREPARATION
                  </span>

                  <h3>Other research manuscripts</h3>

                  <p>
                    Manuscripts arising from other research projects
                    are under preparation. Titles, author contributions
                    and journal information will be added when verified.
                  </p>

                </div>

                <div className="output-mark">✳</div>

              </article>

            </div>

          </section>

          {/* CV SECTION */}

          <section className="section cv-section" id="cv">

            <div className="cv-icon">
              <Download size={26}/>
            </div>

            <div>

              <span className="eyebrow">
                09 / CURRICULUM VITAE
              </span>

              <h2>Want the full picture?</h2>

              <p>
                Download my academic CV for a concise overview of
                my education, research experience, skills and training.
              </p>

            </div>

            <a
              className="button button-dark"
              href="/Remon_Academic_CV.pdf"
              download
            >
              Download CV <Download size={16}/>
            </a>

          </section>

          {/* FOOTER */}

          <footer className="footer" id="contact">

            <div className="footer-top">

              <div>

                <span className="eyebrow eyebrow-light">
                  LET'S CONNECT
                </span>

                <h2>
                  Good research<br/>
                  starts with a <em>conversation.</em>
                </h2>

              </div>

              <a
                className="footer-mail"
                href="mailto:abdurremon08@gmail.com"
              >
                abdurremon08@gmail.com <ArrowUpRight/>
              </a>

            </div>

            <div className="footer-bottom">

              <span>© 2026 ABDUR RAHMAN REMON</span>

              <span>ACADEMIC & RESEARCH PORTFOLIO</span>

              <div className="footer-socials">

                <a
                  href="https://linkedin.com/in/abdur-rahman-remon-ab8836372"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17}/> LinkedIn
                </a>

                <a
                  href="https://www.researchgate.net/profile/Abdur-Remon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BookOpen size={17}/> ResearchGate
                </a>

                <a href="mailto:abdurremon08@gmail.com">
                  <Mail size={17}/> Email
                </a>

              </div>

            </div>

          </footer>

        </main>
      )}

      {/* IMAGE LIGHTBOX */}

      {lightbox && (

        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >

          <button
            aria-label="Close image"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>

          <img
            src={lightbox}
            alt="Expanded portfolio photograph"
          />

        </div>

      )}

    </div>
  )
}

/* SECTION LABEL */

function SectionLabel({
  number,
  title,
  tag,
  light = false
}: {
  number: string
  title: string
  tag: string
  light?: boolean
}) {
  return (
    <div className={`section-label ${light ? 'light' : ''}`}>

      <span>
        {number} <i>—</i> {tag}
      </span>

      <h2>{title}</h2>

    </div>
  )
}

/* SKILL CARD */

function Skill({
  icon,
  title,
  items
}: {
  icon: React.ReactNode
  title: string
  items: string
}) {
  return (
    <div className="skill-card">

      <div className="skill-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{items}</p>

    </div>
  )
}

/* RESEARCH CARD */

function ResearchCard({
  number,
  category,
  date,
  image,
  alt,
  title,
  institution,
  description,
  onClick
}: {
  number: string
  category: string
  date: string
  image: string
  alt: string
  title: string
  institution: string
  description: React.ReactNode
  onClick: () => void
}) {
  return (
    <article className="research-card">

      <div className="research-image">

        <img
          src={image}
          alt={alt}
          loading="lazy"
        />

        <span className="research-number">{number}</span>

      </div>

      <div className="research-content">

        <div className="research-meta">
          <span className="research-category">{category}</span>
          <span className="research-date">{date}</span>
        </div>

        <h3>{title}</h3>

        <p className="research-institution">{institution}</p>

        <p className="research-description">{description}</p>

        <button className="inline-link" onClick={onClick}>
          View related project <ArrowUpRight size={14}/>
        </button>

      </div>

    </article>
  )
}

/* FIELDWORK CARD */

function FieldCard({
  trip,
  onImage
}: {
  trip: typeof fieldTrips[number]
  onImage: (s: string) => void
}) {
  return (
    <article className={`field-card field-photo-card ${trip.className}`}>

      <div className="field-symbol">{trip.icon}</div>

      <span>{trip.label}</span>

      <h3>{trip.place}</h3>

      <p>{trip.text}</p>

      <div className="field-gallery">

        {trip.images.map((src, i) => (

          <img
            key={src}
            src={src}
            alt={`${trip.place} field visit photograph ${i + 1}`}
            loading="lazy"
            onClick={() => onImage(src)}
          />

        ))}

      </div>

      <small>
        {trip.images.length} FIELD
        {trip.images.length === 1 ? ' PHOTOGRAPH' : ' PHOTOGRAPHS'}
      </small>

    </article>
  )
}

/* PROJECT DETAIL PAGE */

function ProjectDetail({
  project,
  onBack,
  onImage
}: {
  project: Project
  onBack: () => void
  onImage: (s: string) => void
}) {
  return (
    <main className="detail-page">

      <button className="back-link" onClick={onBack}>
        ← Back to portfolio
      </button>

      <div
        className="detail-hero"
        style={{ background: project.background }}
      >

        <span>
          PROJECT {project.number} / 03 · {project.year}
        </span>

        <h1>{project.title}</h1>

        <p>{project.category}</p>

        <div className="detail-art">
          <Microscope size={64} strokeWidth={0.8}/>
        </div>

      </div>

      <div className="detail-content">

        <div className="detail-main">

          <span className="eyebrow">PROJECT OVERVIEW</span>

          <h2>
            The research<br/>
            <em>in context.</em>
          </h2>

          <p>{project.detail}</p>

          <h3>Research summary</h3>

          <p>{project.summary}</p>

          <h3>My role and contribution</h3>

          <p>{project.role}</p>

          <h3>Methods and techniques</h3>

          <ul>
            {project.methods.map(m => (
              <li key={m}>{m}</li>
            ))}
          </ul>

        </div>

        <aside className="detail-aside">

          <div className="aside-card">

            <span>PROJECT CATEGORY</span>

            <strong>{project.category}</strong>

            <span>PERIOD</span>

            <strong>{project.year}</strong>

            <span>DOCUMENTATION</span>

            <strong>Photographic research documentation</strong>

          </div>

        </aside>

      </div>

      <div className="detail-gallery">

        <div>

          <span className="eyebrow">VISUAL DOCUMENTATION</span>

          <h2>
            Research <em>gallery</em>
          </h2>

          <p>{project.imageLabel}</p>

        </div>

        <div className="detail-photo-grid">

          {project.photos.map(photo => (

            <img
              key={photo}
              src={photo}
              alt={`${project.title} documentation`}
              loading="lazy"
              onClick={() => onImage(photo)}
            />

          ))}

        </div>

      </div>

      <button className="back-link bottom-back" onClick={onBack}>
        ← Return to all projects
      </button>

    </main>
  )
}

export default App
