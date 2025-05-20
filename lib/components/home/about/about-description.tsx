import { AboutFactsList } from './about-facts-list';
import { ABOUT_FACTS } from './about-facts.consts';

export const AboutDescription = () => (
    <div className="text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg mb-8 text-muted-foreground">
            I'm a passionate software developer with a keen eye for creating elegant and functional
            web applications. With experience in modern web technologies, I love turning complex
            problems into simple, beautiful solutions.
        </p>
        <AboutFactsList items={ABOUT_FACTS} />
    </div>
);
