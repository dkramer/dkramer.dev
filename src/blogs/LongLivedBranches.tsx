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
`

export function LongLivedBranches() {
    return (
        <div css={main}>
            <div css={section}>
                <h1>The Hidden Cost of Long-Lived Branches</h1>
                <p>
                    Every engineering team has been there — a feature branch that started as a “quick experiment” and somehow
                    turned into a three-month side project. By the time it’s ready to merge, half the codebase has changed,
                    your merge conflicts look like a murder scene, and no one remembers how the feature even worked.
                </p>
                <p>
                    Long-lived branches feel safe. They give developers a cozy sense of isolation. But that comfort is expensive —
                    it slows delivery, increases risk, and quietly erodes team velocity.
                </p>
            </div>

            <div css={section}>
                <h2>The Illusion of Safety</h2>
                <p>
                    Branching is a powerful tool, but it’s also seductive. It makes us believe we’re protecting <code>main</code>
                    from unfinished work. In reality, we’re just delaying integration — and the longer a branch lives, the harder that integration becomes.
                </p>
                <p>Each day your branch diverges, the cost of merging grows:</p>
                <ul>
                    <li>Conflicts pile up as other features touch shared code.</li>
                    <li>Context fades — you forget why you made certain changes.</li>
                    <li>Reviews get larger, more complex, and harder to reason about.</li>
                    <li>CI pipelines take longer as they try to validate big diffs instead of small, incremental ones.</li>
                </ul>
                <p>
                    The result: merges that should take minutes turn into all-day events. And with bigger merges come bigger bugs.
                </p>
            </div>

            <div css={section}>
                <h2>The Hidden Human Cost</h2>
                <p>It’s not just technical. Long-lived branches affect team psychology and collaboration:</p>
                <ul>
                    <li><b>They isolate developers.</b> Instead of collaborating early, you work in parallel universes.</li>
                    <li><b>They delay feedback.</b> Reviewers can’t help if they never see your code.</li>
                    <li><b>They block hotfixes.</b> Urgent patches become painful when you’re juggling half-merged branches.</li>
                    <li><b>They break flow.</b> Every time you context-switch back to an old branch, your brain burns cycles rediscovering the problem space.</li>
                </ul>
                <p>
                    What feels like “stability” is actually invisible drag — the tax you pay for postponing integration.
                </p>
            </div>

            <div css={section}>
                <h2>The Feature Flag Alternative</h2>
                <p>
                    Modern teams have a better option: <b>merge early, release late</b> — made possible by feature flags.
                </p>
                <p>
                    Instead of hiding unfinished work in branches, hide it behind toggles:
                </p>
                <ul>
                    <li>Merge to <code>main</code> as soon as code is functional.</li>
                    <li>Keep the feature off in production until it’s ready.</li>
                    <li>Test it safely in stage or production contexts.</li>
                    <li>Roll it back instantly if something misbehaves.</li>
                </ul>
                <p>
                    This approach turns your <code>main</code> branch into a continuously deployable stream — no more release anxiety,
                    no more merge nightmares. It’s the same philosophy that powers continuous delivery: small, reversible changes
                    that flow smoothly into production.
                </p>
            </div>

            <div css={section}>
                <h2>Merging Early Builds Healthier Teams</h2>
                <p>Teams that merge often tend to:</p>
                <ul>
                    <li>Ship faster with fewer defects.</li>
                    <li>Spend less time debugging integration issues.</li>
                    <li>Collaborate more frequently and share ownership.</li>
                    <li>Gain confidence in their pipelines and tests.</li>
                </ul>
                <p>
                    It’s not just about code quality — it’s about engineering culture. Short-lived branches encourage communication,
                    feedback, and trust in automation.
                </p>
            </div>

            <div css={section}>
                <h2>Practical Ways to Kill Long-Lived Branches</h2>
                <p>If your team’s branches linger for weeks, here are some concrete steps to reverse that trend:</p>
                <ul>
                    <li>Introduce feature flags for in-progress work.</li>
                    <li>Set merge time limits (e.g., no branch lives more than five days).</li>
                    <li>Automate tests so you can confidently merge small changes.</li>
                    <li>Use CI/CD pipelines to deploy <code>main</code> automatically.</li>
                    <li>Celebrate small PRs — they’re easier to review and safer to ship.</li>
                    <li>Track merge frequency as a DORA metric — and make it visible.</li>
                </ul>
            </div>

            <div css={section}>
                <h2>The Bottom Line</h2>
                <p>
                    Long-lived branches look like productivity — but they’re really deferred integration debt. They slow you down,
                    make releases riskier, and hide problems until they explode at merge time.
                </p>
                <p>
                    The faster you integrate, the less pain you’ll feel later. So don’t let branches linger. Merge early. Hide
                    unfinished work behind feature flags. Keep <code>main</code> deployable at all times.
                </p>
                <p>
                    Because the real cost of long-lived branches isn’t merge conflicts — it’s momentum lost.
                </p>
            </div>
        </div>
    )
}
