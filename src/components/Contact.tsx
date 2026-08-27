import ContactForm from './ContactForm'
import Section from './ui/Section'
import { SectionIntro } from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Card from './ui/Card'
import Label from './ui/Label'
import SocialLinks from './ui/SocialLinks'
import { siteConfig } from '../config/site'

export default function Contact() {
  return (
    <Section id="contact" wash="band" bordered className="scroll-mt-24">
      <Reveal>
        <SectionIntro
          eyebrow="Contact"
          title="Get in touch"
          description={
            <>
              Roles, research collaborations, or a problem you&apos;re not sure is a machine
              learning problem yet. All welcome. Messages land straight in my inbox, and I reply
              to the address you leave below.
            </>
          }
        />

        <div className="grid md:grid-cols-[1.6fr_1fr] gap-8 md:gap-12 items-start mt-10">
          <Card className="p-6 md:p-8">
            <ContactForm />
          </Card>

          <aside className="flex flex-col gap-8">
            <div>
              <Label className="mb-2">Based in</Label>
              <p className="text-ink">{siteConfig.location}</p>
              <p className="text-sm text-muted mt-1">Open to remote and relocation.</p>
            </div>

            <div>
              <Label className="mb-3">Elsewhere</Label>
              <SocialLinks variant="list" />
            </div>

            <div>
              <Label className="mb-2">Response time</Label>
              <p className="text-sm text-muted">Usually within a day or two.</p>
            </div>
          </aside>
        </div>
      </Reveal>
    </Section>
  )
}
