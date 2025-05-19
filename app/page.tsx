import { Hero } from '@/lib/components/home/hero/hero';
import { About } from '@/lib/components/home/about/about';
import { Skills } from '@/lib/components/home/skills/skills';

const HomePage = () => (
    <div className="scroll-smooth">
        <Hero />
        <About />
        <Skills />
    </div>
);

export default HomePage;
