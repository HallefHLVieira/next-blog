import { LandingPageTemplate } from "../templates/landing-page";
import {
  allPosts
} from 'contentlayer/generated';

export default function Home() {
  console.log(allPosts);

  return (
    <LandingPageTemplate />
  );
}
