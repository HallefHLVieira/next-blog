import {
  HeroSection,
  FeatureSection,
  SupportSection,
  CustomerStorySection,
  CallToAction
} from "@/templates/landing-page/sections"

export const LandingPageTemplate = () => {
  return (
    <article className='flex flex-col gap-10 md:gap-20'>
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  )
}