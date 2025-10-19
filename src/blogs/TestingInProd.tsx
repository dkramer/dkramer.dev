/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

const main = css`
    text-align: left;
    margin-top: -1.5em;
    
    code {
        font-family: 'Courier New', Courier, monospace; /* Monospace font */
        background-color: #f0f0f0; /* Light gray background */
        padding: 2px 4px; /* Small padding */
        border-radius: 3px; /* Slightly rounded corners */
        color: #c7254e; /* Distinct text color */
    }
`

const section = css`
    border-bottom: 1px solid #d1d1d1;
`

export function TestingInProd() {
    return (
        <div css={main}>
            <div css={section}>
                <h1>Why You Should Be Testing in Production</h1>
                <p>
                    For years, “testing in production” was treated like a punchline. The phrase conjured images of
                    cowboy engineers recklessly pushing unverified code into live systems. But in modern software
                    engineering, testing in production isn’t just acceptable — it’s essential.
                </p>
                <p>
                    Let’s talk about why that’s true, what it really means, and how to do it responsibly.
                </p>
            </div>

            <div css={section}>
                <h2>The Limits of Staging Environments</h2>
                <p>
                    The problem isn’t that your staging environment is bad — it’s that it’s different. It can never
                    fully replicate real-world conditions:
                    <ul>
                        <li>
                            <b>Different data:</b> Staging rarely mirrors the messy, massive, unpredictable production
                            dataset.
                        </li>
                        <li>
                            <b>Different scale:</b> Traffic, concurrency, and caching behavior are hard to fake.
                        </li>
                        <li>
                            <b>Different integrations:</b> APIs, auth systems, and payment gateways often behave
                            differently in production.
                        </li>
                        <li>
                            <b>Different users:</b> Real users do things you didn’t think of — in combinations you
                            didn’t test.
                        </li>
                    </ul>
                </p>
                <p>
                    The result? You find bugs only when real users touch the system. The question isn’t if you’ll test
                    in production — it’s <i>whether you’ll do it intentionally or accidentally.</i>
                </p>
            </div>

            <div css={section}>
                <h2>What “Testing in Production” Actually Means</h2>
                <p>
                    Testing in production isn’t about chaos or negligence. It’s about observability, gradual rollout,
                    and real-world validation.
                </p>
                <p>Here are a few patterns that make it safe and powerful:</p>

                <h3>1. Feature Flags</h3>
                <p>
                    Deploy code to production but keep new features hidden behind toggles. Roll out gradually — to
                    internal testers, to 1% of users, then to everyone. Roll back instantly if something breaks.
                </p>
                <p>
                    No more long-lived feature branches or complicated cherry-picks. Deploy anytime.
                </p>

                <h3>2. Canary Releases</h3>
                <p>
                    Push new versions to a small subset of servers or users first. Monitor for regressions in
                    performance, errors, or user behavior before promoting the release broadly.
                </p>

                <h3>3. Shadow Traffic</h3>
                <p>
                    Duplicate real production traffic to a new version of your service — without affecting users.
                    Compare outputs to ensure correctness before going live.
                </p>

                <h3>4. Chaos Engineering</h3>
                <p>
                    Intentionally introduce controlled failures in production (e.g., kill random instances, delay
                    requests) to test resilience. Netflix’s “Chaos Monkey” made this mainstream for a reason.
                </p>

                <h3>5. Monitoring and Observability</h3>
                <p>
                    Testing in production only works if you can see what’s happening. Metrics, logs, distributed
                    tracing, and user analytics form your safety net. Without them, you’re flying blind.
                </p>
            </div>

            <div css={section}>
                <h2>Why It Matters</h2>

                <h3>Real Data = Real Confidence</h3>
                <p>
                    Unit tests and mocks are great, but they can’t simulate the quirks of real-world inputs. Production
                    testing lets you validate your assumptions against actual usage.
                </p>

                <h3>Faster Feedback Loops</h3>
                <p>
                    Instead of waiting days for QA cycles or synthetic load tests, production testing gives you
                    near-instant insight into whether something is working or not.
                </p>

                <h3>Reduced Risk Through Incremental Change</h3>
                <p>
                    Counterintuitively, testing in production can reduce risk. Small, reversible rollouts are safer than
                    massive, infrequent deployments.
                </p>

                <h3>Cultural Alignment with DevOps</h3>
                <p>
                    Continuous delivery and DevOps pipelines thrive on confidence and observability. Testing in
                    production is part of that culture — a sign that your team trusts its automation and infrastructure.
                </p>
            </div>

            <div css={section}>
                <h2>How to Do It Responsibly</h2>
                <p>
                    <ul>
                        <li>
                            <b>Automate rollbacks</b> for failed experiments.
                        </li>
                        <li>
                            <b>Tag experiments and feature versions</b> in your monitoring dashboards.
                        </li>
                        <li>
                            <b>Use synthetic checks and alerting</b> to detect regressions immediately.
                        </li>
                        <li>
                            <b>Communicate transparently</b> with your team — and sometimes with your users.
                        </li>
                        <li>
                            <b>Never experiment with sensitive data</b> or critical user flows without proper isolation
                            and safeguards.
                        </li>
                    </ul>
                </p>
            </div>

            <div css={section}>
                <h2>Final Thoughts</h2>
                <p>
                    “Testing in production” isn’t about recklessness. It’s about humility — acknowledging that we can’t predict every variable in complex systems. It’s about designing with observability, resilience, and user experience in mind.
                </p>
                <p>
                    So next time someone jokes about testing in production, you can smile and say:
                    “Of course we test in production — safely, intentionally, and continuously.”
                </p>
            </div>
        </div>
    )
}
