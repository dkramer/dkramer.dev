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

const definitions = css`
    margin-top: 0;
    dt {
        font-weight: bold;
        margin-left: 1.5em;
    }
    dd {
        padding-bottom: .5em;
    }
`

export function Trident() {
    return (
        <div css={main}>
            <div css={section}>
                <h1>Feature Flags: The Secret Weapon for Faster, Safer Deployments</h1>
                <p>
                    If you’ve worked in software long enough, you’ve heard the phrase “move fast and break things.” It
                    sounds great to developers, but perhaps not to your Product Owner. With feature flags it make sit
                    possible to move fast <i>without</i> breaking things.
                </p>
                <p>
                    Feature flags (or feature toggles, if you prefer) change that equation. They let you move quickly
                    and safely. They’re the quiet infrastructure that makes continuous delivery, testing in production,
                    and developer happiness all possible.
                </p>
            </div>

            <div css={section}>
                <h2>What Are Feature Flags, Really?</h2>
                <p>
                    At their simplest, feature flags are snippets of code that act as <b>kill switches</b> — allowing
                    you to turn specific functionality on or off without redeploying.
                </p>
                <p>
                    Instead of rolling back a deployment, you can just flip a switch.
                </p>
                <p>
                    Let’s define a few key terms you’ll see used interchangeably:

                    <dl css={definitions}>
                        <dt>
                            Feature flags / toggles / code toggles:
                        </dt>
                        <dd>All of them are the same concept.</dd>
                        <dt>
                            Deploying a feature:
                        </dt>
                        <dd>Code is live in production (say, your production Kubernetes cluster).</dd>
                        <dt>
                            Releasing a feature:
                        </dt>
                        <dd>Code is live and the feature toggle is turned on for all users.</dd>
                        <dt>
                            Context:
                        </dt>
                        <dd>The rules under which a toggle is evaluated — maybe it’s on for Client A and off for Client
                            B.
                        </dd>
                        <dt>
                            Baking:
                        </dt>
                        <dd>Turning on a feature in an environment and letting it run for a while to see if any issues
                            emerge before full release.
                        </dd>
                    </dl>
                </p>
            </div>

            <div css={section}>
                <h2>What Feature Flags Can Do for You</h2>
                <p>
                    Feature flags are one of those tools that sound small but reshape entire workflows. Here’s how they
                    help.
                </p>

                <h3>1. Ship Faster Without Fear</h3>
                <p>
                    You can merge incomplete features to <code>main</code> behind toggles. This means smaller pull
                    requests, fewer
                    merge conflicts, and easier hotfixes — since <code>main</code> is always deployable.
                </p>
                <p>
                    No more long-lived feature branches or complicated cherry-picks. Deploy anytime.
                </p>

                <h3>2. Test in Production Safely</h3>
                <p>
                    Want to see how your feature performs against real data and traffic? Toggle it on for a test user, a
                    fake customer, or just a small percentage of real users. Observe. Iterate. Roll back instantly if
                    needed.
                </p>

                <h3>3. Enable True Continuous Delivery</h3>
                <p>
                    Your CI/CD pipeline can deploy to production as soon as code passes tests. New features remain dark
                    until toggled on.
                </p>
                <p>
                    This shifts release control from developers to product managers and marketing — letting them
                    decide <i>when</i> to launch, not if engineering has bandwidth.
                </p>

                <h3>4. Simplify Multi-Environment Management</h3>
                <p>
                    Feature toggles can be configured per environment. Maybe a feature runs hourly in prod but every
                    minute in stage. Or maybe it’s on in “Primus” but off in “Goldfish.”
                </p>
                <p>
                    Since flags can hold booleans, strings, or numbers, they’re flexible enough to handle these cases
                    easily.
                </p>

                <h3>5. Instant Rollbacks</h3>
                <p>
                    If a feature misbehaves, you don’t need to roll back a deployment. Just turn off the flag. That’s an
                    instant improvement to your DORA change failure rate metric.
                </p>

                <h3>6. Reduce the Number of Environments</h3>
                <p>
                    If every developer can safely deploy to main and gate new work behind toggles, you might not need as
                    many staging or integration environments. Everything happens in production — just not for everyone.
                </p>
            </div>

            <div css={section}>
                <h2>The Catch: Feature Flag Debt Is Real</h2>
                <p>
                    Like any abstraction, feature flags come with trade-offs.
                    <dl css={definitions}>
                        <dt>
                            They add code complexity.
                        </dt>
                        <dd>Every flag splits the code path — which means more combinations to test.</dd>
                        <dt>
                            They add process overhead.
                        </dt>
                        <dd>After a feature “bakes” successfully, someone has to remove the toggle from the code and
                            from LD.
                        </dd>
                        <dt>
                            Not everything should be toggled.
                        </dt>
                        <dd>Database migrations, for instance, often don’t make sense behind a flag.</dd>
                        <dt>
                            Long-lived flags are risky.
                        </dt>
                        <dd>Over time, they become part of your business logic, tied to your toggle vendor. Those should
                            evolve into permanent permissions or role-based logic inside the app.
                        </dd>
                    </dl>
                </p>
                <p>
                    The key is discipline: short-lived flags, tracked and cleaned up as part of the release checklist.
                </p>
            </div>

            <div css={section}>
                <h2>A Practical Workflow</h2>
                <p>
                    Here’s how a healthy toggle-driven workflow might look:
                    <ol>
                        <li>
                            <b>Create the feature flag</b> — off in prod, on for the developer in stage/local.
                        </li>
                        <li>
                            <b>Branch from main</b> — and add the new feature behind the flag.
                        </li>
                        <li>
                            <b>Write tests</b> for both flag states (on/off).
                        </li>
                        <li>
                            <b>Deploy to stage and prod</b> — the feature is inactive in prod until toggled on.
                        </li>
                        <li>
                            <b>Test in stage or prod,</b> depending on context.
                        </li>
                        <li>
                            <b>Toggle on in prod</b> once ready.
                        </li>
                        <li>
                            <b>Let it bake,</b> watching metrics and error rates.
                        </li>
                        <li>
                            <b>Remove the toggle from code and service once stable.</b>
                        </li>
                    </ol>
                </p>
                <p>
                    The key is discipline: short-lived flags, tracked and cleaned up as part of the release checklist.
                </p>
            </div>

            <div css={section}>
                <h2>The Three-Prong Approach</h2>
                <p>
                    Where this all leads is a vision of <b>continuous confidence</b> — where developers, product, and
                    operations all move fast without fear.
                </p>
                <p>
                    To get there, you need three pillars:
                    <ol>
                        <li>
                            <b>Feature Toggles</b> — allow main to be deployable at all times.
                        </li>
                        <li>
                            <b>Automated Tests</b> — verify new work doesn’t break existing functionality. (Best time to
                            plant a test suite? Twenty years ago. Second best time? Today.)
                        </li>
                        <li>
                            <b>CI/CD Pipelines</b> — automate testing and deployment so releases happen safely and
                            often.
                        </li>
                    </ol>
                </p>
                <p>
                    Together, these form the foundation of modern engineering — the ability to <b>deploy
                    anytime</b> and <b>release when ready.</b>
                </p>
            </div>

            <div css={section}>
                <h2>Final Thoughts</h2>
                <p>
                    Feature flags aren’t just a tool — they’re a philosophy. They separate deployment from release. They empower teams to test, learn, and move fast without breaking things.
                </p>
                <p>
                    Used wisely, they can shrink your release cycles, reduce firefighting, and give both engineers and PMs the confidence to push new ideas into production faster.
                </p>
                <p>
                    Together, these form the foundation of modern engineering — the ability to <b>deploy
                    anytime</b> and <b>release when ready.</b>
                </p>
            </div>
        </div>
    )
}
