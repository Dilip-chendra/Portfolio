// ─────────────────────────────────────────────
// SystemArchitectureVisualizer
//
// Interactive, high-tech Architecture Blueprint & Live Telemetry HUD
// Displays real system execution pipelines, state machines, and guardrails
// Transforms the modal into a world-class dual-column Command Center.
// ─────────────────────────────────────────────

import { useState } from 'react'
import type { CaseStudy } from '@/data/portfolioData'

interface SystemArchitectureVisualizerProps {
  system: CaseStudy
}

interface BlueprintStage {
  step: string
  name: string
  type: 'input' | 'agent' | 'guardrail' | 'retrieval' | 'execution' | 'audit'
  badge: string
  description: string
  subTech: string[]
}

const SYSTEM_BLUEPRINTS: Record<string, {
  pipelineTitle: string
  telemetry: { label: string; value: string }[]
  stages: BlueprintStage[]
}> = {
  reviveos: {
    pipelineTitle: 'GOVERNED REVENUE RECOVERY RUNTIME',
    telemetry: [
      { label: 'ORCHESTRATION', value: 'LangGraph Cyclical State Graph' },
      { label: 'POLICY FIREWALL', value: 'Deterministic Risk Gates' },
      { label: 'INTEGRITY AUDIT', value: 'HMAC/SHA-256 Signatures' },
      { label: 'TOOL PROTOCOL', value: 'MCP Gateway Compatible' },
    ],
    stages: [
      {
        step: '01',
        name: 'Failed Transaction Intake',
        type: 'input',
        badge: 'Webhook Stream',
        description: 'Ingests real-time billing failure webhooks (Stripe, Razorpay) and extracts card brand, decline reason, and customer telemetry.',
        subTech: ['FastAPI', 'Webhook Receiver', 'Pydantic'],
      },
      {
        step: '02',
        name: 'Deterministic Policy Firewall',
        type: 'guardrail',
        badge: 'Policy Engine',
        description: 'Validates candidate recovery actions against hard compliance constraints, card velocity caps, and fraud blacklists before agent dispatch.',
        subTech: ['Deterministic Rules', 'Velocity Limiter', 'Fraud Filter'],
      },
      {
        step: '03',
        name: 'LangGraph Supervisor Agent',
        type: 'agent',
        badge: 'Supervisor State Graph',
        description: 'Hierarchical state machine evaluates historical customer value, risk scores, and routes transactions through bounded recovery trees.',
        subTech: ['LangGraph', 'State Reducer', 'Action Trees'],
      },
      {
        step: '04',
        name: 'Bounded Action Execution',
        type: 'execution',
        badge: 'Tool Dispatcher',
        description: 'Dispatches targeted customer verification flows, smart retry intervals, or payment instrument update prompts via external APIs.',
        subTech: ['MCP Tool Runner', 'REST APIs', 'Payment Adapters'],
      },
      {
        step: '05',
        name: 'HMAC Audit Ledger & Escalation',
        type: 'audit',
        badge: 'Cryptographic Ledger',
        description: 'Signs every state transition with HMAC/SHA-256 for auditability. High-value disputed transactions auto-divert to human queues.',
        subTech: ['HMAC/SHA-256', 'Human-in-the-Loop', 'Audit Trail'],
      },
    ],
  },

  'ai-business-builder': {
    pipelineTitle: 'AUTONOMOUS VENTURE FLEET ARCHITECTURE',
    telemetry: [
      { label: 'COORDINATION', value: 'CrewAI 6-Agent Specialist Fleet' },
      { label: 'PROVIDER ROUTING', value: 'Claude 3.5 & OpenAI Gateway' },
      { label: 'AUTOMATION', value: 'Headless Playwright Workers' },
      { label: 'WORKSPACE', value: 'Isolated State Snapshot Engine' },
    ],
    stages: [
      {
        step: '01',
        name: 'Venture Prompt & Objective Ingestion',
        type: 'input',
        badge: 'AI Studio Intake',
        description: 'Parses high-level business ideas, target market definitions, and monetization parameters into structured venture schemas.',
        subTech: ['Next.js 14', 'FastAPI', 'Structured Schemas'],
      },
      {
        step: '02',
        name: 'Dynamic AI Provider Router',
        type: 'agent',
        badge: 'Routing Gateway',
        description: 'Optimizes reasoning depth and token economics by dynamically routing analytical vs generative tasks to Claude or OpenAI.',
        subTech: ['Model Gateway', 'Token Optimizer', 'Provider Routing'],
      },
      {
        step: '03',
        name: '6-Specialist Autonomous Fleet',
        type: 'agent',
        badge: 'Agent Swarm',
        description: 'Market Analyst, Product Architect, Growth Strategist, and Financial Modeler execute collaborative research and verified plans.',
        subTech: ['CrewAI', 'Hierarchical Swarm', 'Task Delegation'],
      },
      {
        step: '04',
        name: 'Playwright Browser Automation',
        type: 'execution',
        badge: 'Browser Engine',
        description: 'Headless browser workers autonomously scrape competitor positioning, verify live search SERP trends, and stage digital assets.',
        subTech: ['Playwright', 'Headless Workers', 'SERP Scraping'],
      },
      {
        step: '05',
        name: 'Workspace Manager & Artifact Staging',
        type: 'audit',
        badge: 'Isolated Workspace',
        description: 'Serializes marketing funnels, copy collateral, and code assets into isolated workspace databases with OAuth integrations.',
        subTech: ['OAuth 2.0', 'State Serialization', 'Artifact DB'],
      },
    ],
  },

  'researchflow-ai': {
    pipelineTitle: 'SOURCE-GROUNDED INTELLIGENCE PIPELINE',
    telemetry: [
      { label: 'PIPELINE', value: 'LangGraph Academic Synthesis' },
      { label: 'VECTOR DATABASE', value: 'Tenant-Scoped ChromaDB' },
      { label: 'GROUNDING', value: 'Zero-Ungrounded Claims Policy' },
      { label: 'VERIFICATION', value: 'Cross-Source Conflict Engine' },
    ],
    stages: [
      {
        step: '01',
        name: 'Research Directive & Corpus Query',
        type: 'input',
        badge: 'Topic Ingestion',
        description: 'Formulates multi-angle search queries and academic research directives across target competitor and research domains.',
        subTech: ['FastAPI', 'Query Expansion', 'Pydantic'],
      },
      {
        step: '02',
        name: 'Automated Harvester & Ingestor',
        type: 'retrieval',
        badge: 'Web & Filing Ingestion',
        description: 'Fetches public filings, technical documentation, changelogs, and pricing models with rate-limited exponential backoff.',
        subTech: ['Async HTTP', 'Document Parsers', 'Domain Crawlers'],
      },
      {
        step: '03',
        name: 'Semantic Chunking & ChromaDB Store',
        type: 'retrieval',
        badge: 'ChromaDB Vectors',
        description: 'Generates high-density vector embeddings and stores document chunks with strict multi-tenant isolation metadata.',
        subTech: ['ChromaDB', 'Vector Embeddings', 'Multi-Tenant Isolation'],
      },
      {
        step: '04',
        name: 'Provenance & Conflict Resolver',
        type: 'guardrail',
        badge: 'Claim Grounding',
        description: 'Maps extracted claims to primary citation spans. Flags contradictory assertions across sources with confidence scoring.',
        subTech: ['Provenance Engine', 'Conflict Detection', 'Confidence Rating'],
      },
      {
        step: '05',
        name: 'Synthesis & Executive Briefing',
        type: 'agent',
        badge: 'LangGraph Synthesizer',
        description: 'Synthesizes verified findings into executive market briefs with explicit confidence ratings and actionable execution workflows.',
        subTech: ['LangGraph', 'Executive Synthesis', 'Audit Trails'],
      },
    ],
  },

  'cityforge-ai': {
    pipelineTitle: 'URBAN SPATIAL INTELLIGENCE MATRIX',
    telemetry: [
      { label: 'DATA ENGINE', value: 'OpenStreetMap & Overpass API' },
      { label: 'SPATIAL INDEX', value: 'Radial Density Void Analysis' },
      { label: 'OPPORTUNITY MODEL', value: 'Supply-Demand Variance Engine' },
      { label: 'FORMAT', value: 'Deterministic GeoJSON Pipeline' },
    ],
    stages: [
      {
        step: '01',
        name: 'Geospatial Sector Ingestion',
        type: 'input',
        badge: 'Coordinate Bounding Box',
        description: 'Accepts metropolitan coordinate bounding boxes, commercial target zones, and population flow vectors.',
        subTech: ['GeoJSON', 'Coordinate Validator', 'FastAPI'],
      },
      {
        step: '02',
        name: 'Overpass API Live Query Pipeline',
        type: 'retrieval',
        badge: 'Spatial Ingestion',
        description: 'Programmatically extracts real-time infrastructure, commercial amenities, public transport nodes, and foot-traffic indicators.',
        subTech: ['Overpass API', 'OpenStreetMap', 'Spatial Queries'],
      },
      {
        step: '03',
        name: 'Spatial Void & Radial Gap Engine',
        type: 'guardrail',
        badge: 'Density Analytics',
        description: 'Calculates radial density matrices to pinpoint underserved geographic sectors, supply voids, and affordability gaps.',
        subTech: ['Radial Analysis', 'Density Matrices', 'Void Detection'],
      },
      {
        step: '04',
        name: 'Opportunity Scoring & Feasibility Model',
        type: 'agent',
        badge: 'Scoring Algorithm',
        description: 'Ranks spatial sectors by unmet consumer demand, competitive saturation, and pedestrian footfall accessibility.',
        subTech: ['Opportunity Scoring', 'Deterministic Matrices', 'Analytics'],
      },
      {
        step: '05',
        name: 'Commercial Opportunity Blueprint',
        type: 'execution',
        badge: 'Venture Discovery',
        description: 'Generates structured venture feasibility reports detailing location recommendations, business categories, and demand signals.',
        subTech: ['Economic Blueprint', 'Venture Recommendation', 'Reporting'],
      },
    ],
  },

  veyra: {
    pipelineTitle: 'ADAPTIVE MULTI-MODAL INTERVIEW ENGINE',
    telemetry: [
      { label: 'INTERVIEWER', value: 'Adaptive Persona State Machine' },
      { label: 'LIVE CODE IDE', value: 'Integrated Monaco Editor' },
      { label: 'SYSTEM CANVAS', value: 'Interactive Architecture Board' },
      { label: 'EVALUATION', value: 'Evidence-Backed Standardized Rubric' },
    ],
    stages: [
      {
        step: '01',
        name: 'Multi-Modal Voice & Video Stream',
        type: 'input',
        badge: 'WebRTC & Audio',
        description: 'Captures candidate voice responses, facial cues, and live technical conversation with low-latency audio processing.',
        subTech: ['Voice AI', 'WebRTC', 'Audio Processing'],
      },
      {
        step: '02',
        name: 'Adaptive Questioning Core',
        type: 'agent',
        badge: 'State Machine Engine',
        description: 'Dynamically evaluates candidate answers in real time, adapting question difficulty and probing technical depth on edge cases.',
        subTech: ['Adaptive Core', 'State Machine', 'Dynamic Questioning'],
      },
      {
        step: '03',
        name: 'Monaco Live IDE & Code Execution',
        type: 'execution',
        badge: 'Monaco Editor Sandbox',
        description: 'Provides native in-browser IDE with TypeScript autocompletion, algorithmic test-case execution, and performance checks.',
        subTech: ['Monaco Editor', 'TypeScript', 'Sandbox Execution'],
      },
      {
        step: '04',
        name: 'Interactive System Design Canvas',
        type: 'execution',
        badge: 'Whiteboard Canvas',
        description: 'Interactive diagramming workspace allowing candidates to design distributed system architectures and state topologies.',
        subTech: ['Canvas Engine', 'System Topology', 'Real-time Sync'],
      },
      {
        step: '05',
        name: 'Evidence-Backed Rubric Evaluation',
        type: 'audit',
        badge: 'Scoring Engine',
        description: 'Generates granular candidate assessment reports mapped directly to spoken quotes, code solutions, and architecture decisions.',
        subTech: ['Standardized Rubric', 'Evidence Mapping', 'Evaluation Report'],
      },
    ],
  },

  'enterprise-brain-copilot': {
    pipelineTitle: 'ENTERPRISE RAG & MCP GOVERNED RUNTIME',
    telemetry: [
      { label: 'KNOWLEDGE BASE', value: 'ChromaDB Vector Store (Brain OS)' },
      { label: 'TOOL PROTOCOL', value: 'Model Context Protocol (MCP)' },
      { label: 'PERMISSIONS', value: 'Role-Based Access + Confirmation' },
      { label: 'INTEGRATIONS', value: 'Enterprise REST, SQL & Cloud' },
    ],
    stages: [
      {
        step: '01',
        name: 'Enterprise Request & Prompt Gateway',
        type: 'input',
        badge: 'Enterprise Gateway',
        description: 'Ingests administrative workflows, operational prompts, and complex enterprise knowledge queries with session tracking.',
        subTech: ['FastAPI', 'Session Manager', 'Enterprise Auth'],
      },
      {
        step: '02',
        name: 'ChromaDB Document Ingestion & RAG',
        type: 'retrieval',
        badge: 'Brain OS Vector Store',
        description: 'Indexes unstructured enterprise documentation into ChromaDB with dense embeddings and role-based access filtering.',
        subTech: ['ChromaDB', 'Hybrid Search', 'Document Chunking'],
      },
      {
        step: '03',
        name: 'Model Context Protocol (MCP) Server',
        type: 'agent',
        badge: 'MCP Tool Gateway',
        description: 'Exposes internal enterprise databases, microservice health monitors, and cloud APIs via typed MCP stdio and SSE protocols.',
        subTech: ['Model Context Protocol', 'Stdio & SSE', 'Tool Schemas'],
      },
      {
        step: '04',
        name: 'Deterministic Tool Guardrails',
        type: 'guardrail',
        badge: 'Policy & Safety Gates',
        description: 'Enforces read-only defaults, cryptographic action validation, and mandatory human confirmation for state-mutating actions.',
        subTech: ['Policy Gates', 'Read-Only Defaults', 'Human Confirmation'],
      },
      {
        step: '05',
        name: 'Governed Knowledge & Execution',
        type: 'execution',
        badge: 'Autonomous Copilot',
        description: 'Synthesizes enterprise knowledge while safely triggering approved tool operations across cloud infrastructure.',
        subTech: ['Copilot Engine', 'Cloud Integration', 'Verified Execution'],
      },
    ],
  },
}

export function SystemArchitectureVisualizer({ system }: SystemArchitectureVisualizerProps) {
  const [copied, setCopied] = useState(false)
  const blueprint = SYSTEM_BLUEPRINTS[system.id] || SYSTEM_BLUEPRINTS['reviveos']

  function copyCloneCommand() {
    navigator.clipboard.writeText(`git clone ${system.githubUrl}.git`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Type color mapping
  const getTypeColor = (type: BlueprintStage['type']) => {
    switch (type) {
      case 'input':
        return '#c8b88c' // Champagne Gold
      case 'agent':
        return '#80ed99' // Radiant Emerald
      case 'guardrail':
        return '#e0a96d' // Amber Safety
      case 'retrieval':
        return '#90e0ef' // Cyan Retrieval
      case 'execution':
        return '#c77dff' // Violet Execution
      case 'audit':
        return '#57cc99' // Mint Green
    }
  }

  return (
    <div
      style={{
        flex: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#0c0e12',
        backgroundImage: 'radial-gradient(rgba(200, 184, 140, 0.08) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        borderRight: '1px solid rgba(255, 255, 255, 0.08)',
        overflowY: 'auto',
        padding: 'clamp(24px, 4vw, 44px)',
        boxSizing: 'border-box',
      }}
    >
      {/* Blueprint Header */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#57cc99',
                boxShadow: '0 0 10px #57cc99',
              }}
            />
            <span
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '9.5px',
                color: '#e5c378',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              ARCHITECTURE BLUEPRINT // SYSTEM TELEMETRY
            </span>
          </div>

          <span
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '8.5px',
              padding: '2px 8px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(87, 204, 153, 0.12)',
              border: '1px solid rgba(87, 204, 153, 0.3)',
              color: '#80ed99',
              letterSpacing: '0.1em',
            }}
          >
            ACTIVE RUNTIME
          </span>
        </div>

        <h3
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(18px, 2.2vw, 24px)',
            fontWeight: 700,
            color: '#ffffff',
            margin: '0 0 6px 0',
            letterSpacing: '-0.02em',
          }}
        >
          {blueprint.pipelineTitle}
        </h3>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            color: '#9a9a94',
            margin: 0,
            lineHeight: 1.5,
            fontWeight: 300,
          }}
        >
          Visual execution pipeline, deterministic state boundaries, and agentic workflows for{' '}
          <span style={{ color: '#e5c378', fontWeight: 600 }}>{system.title}</span>.
        </p>
      </div>

      {/* Telemetry Metrics Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '8px',
          marginBottom: '28px',
        }}
      >
        {blueprint.telemetry.map((item, idx) => (
          <div
            key={idx}
            style={{
              padding: '8px 10px',
              backgroundColor: 'rgba(255, 255, 255, 0.025)',
              border: '1px solid rgba(200, 184, 140, 0.18)',
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                fontFamily: '"Space Mono", monospace',
                fontSize: '8px',
                color: '#8a8a86',
                letterSpacing: '0.12em',
                marginBottom: '3px',
                textTransform: 'uppercase',
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '10.5px',
                fontWeight: 600,
                color: '#f5f5f0',
                lineHeight: 1.3,
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* ── Visual Node Pipeline Flow ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0', position: 'relative', marginBottom: '28px' }}>
        {blueprint.stages.map((stage, idx) => {
          const typeColor = getTypeColor(stage.type)
          const isLast = idx === blueprint.stages.length - 1

          return (
            <div key={stage.step} style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Node Card */}
              <div
                style={{
                  padding: '12px 14px',
                  backgroundColor: 'rgba(15, 18, 24, 0.75)',
                  border: `1px solid ${typeColor}33`,
                  borderLeft: `3px solid ${typeColor}`,
                  borderRadius: '5px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.35)',
                  transition: 'all 0.2s ease',
                }}
              >
                {/* Node Top Header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '5px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '9px',
                        color: typeColor,
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                      }}
                    >
                      STAGE {stage.step}
                    </span>
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#ffffff',
                      }}
                    >
                      {stage.name}
                    </span>
                  </div>

                  <span
                    style={{
                      fontFamily: '"Space Mono", monospace',
                      fontSize: '8px',
                      padding: '2px 6px',
                      borderRadius: '3px',
                      backgroundColor: `${typeColor}18`,
                      border: `1px solid ${typeColor}40`,
                      color: typeColor,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {stage.badge}
                  </span>
                </div>

                {/* Node Description */}
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '10.5px',
                    color: '#b0afa9',
                    margin: '0 0 8px 0',
                    lineHeight: 1.45,
                    fontWeight: 300,
                  }}
                >
                  {stage.description}
                </p>

                {/* Sub-Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {stage.subTech.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: '"Space Mono", monospace',
                        fontSize: '7.5px',
                        color: '#c8b88c',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(200, 184, 140, 0.2)',
                        padding: '1px 5px',
                        borderRadius: '2px',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Connecting Pulse Line Between Nodes */}
              {!isLast && (
                <div
                  style={{
                    height: '18px',
                    marginLeft: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: '2px',
                      height: '100%',
                      background: `linear-gradient(to bottom, ${typeColor}80, ${getTypeColor(blueprint.stages[idx + 1].type)}80)`,
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        left: '-1px',
                        boxShadow: '0 0 6px #ffffff',
                        animation: 'scrollLinePulse 1.8s infinite',
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Terminal Clone Command Bar */}
      <div
        style={{
          marginTop: 'auto',
          padding: '12px 14px',
          backgroundColor: 'rgba(10, 12, 16, 0.9)',
          border: '1px solid rgba(200, 184, 140, 0.25)',
          borderRadius: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
          <span style={{ color: '#57cc99', fontFamily: '"Space Mono", monospace', fontSize: '11px' }}>$</span>
          <span
            style={{
              fontFamily: '"Space Mono", monospace',
              fontSize: '10px',
              color: '#d0cfca',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            git clone {system.githubUrl}.git
          </span>
        </div>

        <button
          type="button"
          onClick={copyCloneCommand}
          style={{
            background: copied ? 'rgba(87, 204, 153, 0.2)' : 'rgba(200, 184, 140, 0.15)',
            border: `1px solid ${copied ? '#57cc99' : 'rgba(200, 184, 140, 0.4)'}`,
            color: copied ? '#57cc99' : '#e5c378',
            fontFamily: '"Space Mono", monospace',
            fontSize: '9px',
            padding: '5px 10px',
            borderRadius: '3px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s ease',
          }}
        >
          {copied ? 'COPIED!' : 'COPY CLONE'}
        </button>
      </div>
    </div>
  )
}
