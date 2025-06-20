import { PROJECT_QUALITIES } from './commercial-projects.consts';

export const CommercialProjectsQualities = () => (
    <>
        <h3 className="text-xl font-semibold mt-12 mb-4">Key Project Qualities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECT_QUALITIES.map((quality) => (
                <div
                    key={quality.name}
                    className="p-6 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors"
                >
                    <h4 className="text-lg font-medium">{quality.name}</h4>
                    <p className="text-muted-foreground mt-2">{quality.description}</p>
                </div>
            ))}
        </div>
    </>
);
