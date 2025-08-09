import {Footer} from '~/components/Footer'
import {seo} from '~/utils/seo'
import {SITE_NAME} from '~/utils/constants'

export const Route = createFileRoute({ 
  component: RouteComp,
  head: () => ({
    meta: seo({
      title: `${SITE_NAME} Ethos`,
      description:
        'My personal philosophy and approach to software development and client relationships.',
    }),
  }),
})

export default function RouteComp() {
  return (
    <div className="flex flex-col max-w-full min-h-screen gap-12 p-4 md:p-8 pb-0">
      <div className="flex-1 space-y-12 w-full max-w-3xl mx-auto">
        <header className="">
          <h1 className="text-4xl font-bold">{SITE_NAME} Ethos</h1>
        </header>

        <section className="">
          <p className="text-lg">
            My approach to software development is built on principles that prioritize
            genuine value, honest communication, and the joy of building great things.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Value Above All</h2>
          <p>
            Every service I provide must deliver <strong>more value than it costs</strong>.
            This isn't just about pricing—it's about ensuring that what I build genuinely
            improves your business, solves real problems, and moves you forward.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Radical Honesty</h2>
          <p>
            I believe in <strong>clear communication</strong>, even when it's uncomfortable.
            I'm willing to risk losing a client to give you a realistic assessment of what
            a project actually requires. No sugar-coating timelines, no overselling capabilities,
            no false promises.
          </p>
          <p>
            I have <strong>nothing to prove about my intelligence</strong>. If I don't understand
            something, I'll say so. Pretending to know what I don't wastes everyone's time and
            leads to poor outcomes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Joy in the Process</h2>
          <p>
            <strong>Joy is as important as technology, politics, even outcomes.</strong>
            Work should be fulfilling, not just functional. When we enjoy what we're building,
            we build it better.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Essential Meetings Only</h2>
          <p>
            While I enjoy collaborating and discussing ideas, I try to have only
            <strong> essential meetings</strong>. I prefer spending time building rather than
            talking about building. When we do meet, let's make it count.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Complete Transparency</h2>
          <p>
            I believe in <strong>openness about techniques, limitations, concerns, and processes</strong>.
            No information hoarding, no black boxes. You should understand how things work,
            what the constraints are, and what decisions we're making along the way.
          </p>
        </section>

        <section className="space-y-4">
          <p className="text-lg font-medium">
            These principles guide every project I take on. They're not just ideals—they're
            <strong> practical commitments</strong> that shape how I work, communicate, and
            deliver value to the people I serve.
          </p>
        </section>

        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            <strong>Steve Steinitz</strong>, Founder
          </p>
        </section>
      </div>
      <Footer />
    </div>
  )
}
