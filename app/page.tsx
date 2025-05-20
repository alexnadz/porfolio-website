import { Hero } from '@/lib/components/home/hero/hero';
import { About } from '@/lib/components/home/about/about';
import { Skills } from '@/lib/components/home/skills/skills';
import { Contact } from '@/lib/components/home/contact/contact';

const HomePage = () => (
    <div className="scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Contact />
    </div>
);

export default HomePage;
