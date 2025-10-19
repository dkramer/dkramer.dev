/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const main = css`
    text-align: left;
    margin-top: -1.5em;


    code {
        font-family: 'Courier New', Courier, monospace;
        background-color: #f0f0f0;
        padding: 2px 4px;
        border-radius: 3px;
        color: #c7254e;
    }
`

const section = css`
    border-bottom: 1px solid #d1d1d1;
    margin-bottom: 1.5em;
`

export function UbiquitousLanguage() {
    return (
        <div css={main}> <div css={section}> <h1>Why Ubiquitous Language Matters in Software Engineering</h1> <p>
            Language is the bridge between humans and software. When it’s clear and shared, teams move fast and build the right things. When it’s ambiguous, confusion spreads — and code silently diverges from reality. </p> <p>
            That’s why <b>ubiquitous language</b> is one of the most important (and underrated) tools in software engineering. It’s the practice of using the same precise terms — across code, conversations, and documentation — to describe the business domain. Everyone, from developers to domain experts to end users, speaks the same language. </p> </div>

            <div css={section}>
                <h2>The Problem With Ambiguity</h2>
                <p>
                    Software doesn’t handle ambiguity. Computers require exact instructions — no nuance, no gray areas. But humans love fuzzy words like “customer,” “account,” or “order.” Each might mean something slightly different to different people.
                </p>
                <p>
                    If a developer assumes “customer” means a paying account, while the business means “any registered user,” the result is misaligned code and misunderstood features. Bugs creep in not because of logic errors, but because of <b>language drift</b>.
                </p>
                <p>
                    Ambiguous terminology becomes technical debt — subtle, pervasive, and expensive to fix later.
                </p>
            </div>

            <div css={section}>
                <h2>How Ubiquitous Language Solves It</h2>
                <p>
                    Ubiquitous language forces clarity. It demands that everyone agree on what words mean — and that those definitions appear everywhere: in meetings, code, documentation, and tests.
                </p>
                <p>
                    When the same words describe the same concepts across all layers of the system, misunderstandings vanish.
                </p>
                <p>For example:</p>
                    <pre>
                        <code>
                            {
                            `// Bad: inconsistent naming
const createUserAccount = () => {...}
const getCustomerProfile = () => {...}

// Better: consistent domain language
const createCustomer = () => {...}
const getCustomer = () => {...}`
                            }
                        </code>
                    </pre>
                <p>
                The second example aligns with how domain experts describe the concept — “customer” — instead of mixing “user” and “account.” The code becomes self-documenting because it mirrors the shared vocabulary. </p> </div>
            <div css={section}>
                <h2>The Role in Domain-Driven Design</h2>
                <p>
                    Ubiquitous language is a <b>core pillar of Domain-Driven Design (DDD)</b>. In DDD, the domain model — the conceptual map of how a business operates — drives the software’s structure. But that only works if the language is consistent between the model and the code.
                </p>
                <p>
                    When domain experts say “an order can be placed, shipped, or canceled,” the code should literally read like that:
                </p>
                <pre>
                    <code>
                        order.place()
                        order.ship()
                        order.cancel()
                    </code>
                </pre>
                <p>Not: </p>
                <pre>
                    <code>
                        order.activate()
                        order.complete()
                        order.void()
                    </code>
                </pre>
                <p>
                These might be technically accurate, but they drift from the domain’s meaning. Over time, that drift makes the system harder to reason about. The business evolves in one language, the code in another, and alignment decays. A ubiquitous language keeps the two in sync.
                </p>
            </div>

            <div css={section}>
                <h2>Naming Is a Design Act</h2>
                <p>
                    Choosing names isn’t a trivial task — it’s design. When you embed ubiquitous language into your codebase, you’re not just naming things; you’re encoding shared understanding. Each identifier becomes a living artifact of collaboration.
                </p>
                <p>
                    This alignment makes onboarding faster, discussions clearer, and testing easier. You can even trace business logic directly through the code because the language matches the mental model of the business.
                </p>
            </div>

            <div css={section}>
                <h2>How It Strengthens the SDLC</h2>
                <p>
                    A shared language improves every phase of the Software Development Life Cycle (SDLC):
                    <ul>
                        <li><b>Requirements:</b> Fewer misinterpretations when everyone agrees on terms.</li>
                        <li><b>Design:</b> Models and diagrams stay consistent across teams.</li>
                        <li><b>Implementation:</b> Code naturally reflects domain intent.</li>
                        <li><b>Testing:</b> Scenarios and acceptance tests read like business rules.</li>
                        <li><b>Maintenance:</b> Developers can infer meaning without deep tribal knowledge.</li>
                    </ul>
                </p>
                <p>
                    It’s not just semantics — it’s a mechanism for reducing waste and improving software quality.
                </p>
            </div>

            <div css={section}>
                <h2>Building a Ubiquitous Language</h2>
                <p>
                    Here’s how teams can start implementing it:
                    <ul>
                        <li><b>Collaborate with domain experts:</b> Extract terms directly from business conversations.</li>
                        <li><b>Create a living glossary:</b> Define key entities and their meanings.</li>
                        <li><b>Refactor code:</b> Update names to reflect the agreed terms.</li>
                        <li><b>Use it everywhere:</b> Code, APIs, UI text, and documentation should share the same language.</li>
                        <li><b>Review language regularly:</b> Evolve definitions as the domain evolves.</li>
                    </ul>
                </p>
                <p>
                    It’s a discipline that requires maintenance, but the payoff compounds over time.
                </p>
            </div>

            <div css={section}>
                <h2>The Bottom Line</h2>
                <p>
                    Software development is a language problem disguised as a technical one. Ubiquitous language transforms communication into a design tool — uniting business and code around the same truth.
                </p>
                <p>
                    When developers, domain experts, and users speak the same language, the software becomes more than a system. It becomes an expression of understanding — one where every word, variable, and function reinforces the meaning it was built to serve.
                </p>
            </div>
        </div>
    )
}
