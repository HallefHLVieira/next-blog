import {
  HeroSection,
  FeatureSection,
  SupportSection,
  CustomerStorySection,
  CallToAction
} from "@/templates/landing-page/sections"

export const LandingPageTemplate = () => {
  return (
    <article className='flex flex-col'>
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  )
}