import PageLayout from '../components/layout/PageLayout.jsx'

function ContactPage() {
  return (
    <PageLayout activeSection="contact" isContactPage>
      <main className="mx-auto max-w-[760px] py-12 max-[620px]:py-8" id="contact">
        <div className="mb-6 text-center">
          <p className="mb-2 text-[10px] font-semibold tracking-[1.15px] text-muted uppercase">We'd love to hear from you</p>
          <h1 className="font-heading text-3xl font-normal text-ink max-[620px]:text-[27px]">Contact us</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted">For advertising inquiries or other questions, send us a message using the form below.</p>
        </div>

        <form
          className="space-y-4 rounded-2xl border border-line bg-surface/75 p-6 shadow-[0_12px_36px_rgba(0,0,0,0.16)] max-[620px]:p-4"
          action="https://formsubmit.co/shubham125110@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Porn Galaxy contact form message" />
          <input type="hidden" name="_template" value="table" />
          <label className="block text-sm font-medium text-ink">
            Name
            <input className="mt-1.5 h-11 w-full rounded-xl border border-line bg-[#101b25] px-3 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-coral focus:ring-2 focus:ring-coral/20" type="text" name="name" autoComplete="name" placeholder="Your name" required />
          </label>
          <label className="block text-sm font-medium text-ink">
            Email
            <input className="mt-1.5 h-11 w-full rounded-xl border border-line bg-[#101b25] px-3 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-coral focus:ring-2 focus:ring-coral/20" type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
          </label>
          <label className="block text-sm font-medium text-ink">
            Message
            <textarea className="mt-1.5 min-h-32 w-full resize-y rounded-xl border border-line bg-[#101b25] px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-muted/70 focus:border-coral focus:ring-2 focus:ring-coral/20" name="message" placeholder="How can we help?" required />
          </label>
          <button className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#8ab4ff] px-6 text-sm font-semibold text-[#111827] transition hover:bg-[#a4c4ff]" type="submit">
            Send message
          </button>
        </form>
      </main>
    </PageLayout>
  )
}

export default ContactPage
