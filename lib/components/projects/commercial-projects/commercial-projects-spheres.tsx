import { PROJECT_SPHERES } from './commercial-projects.consts';

export const CommercialProjectsSpheres = () => (
    <>
        <h3 className="text-xl font-semibold mt-12 mb-4">Project Spheres</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECT_SPHERES.map((sphere) => (
                <div
                    key={sphere.name}
                    className="p-6 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors"
                >
                    <h4 className="text-lg font-medium">{sphere.name}</h4>
                    <p className="text-muted-foreground mt-2">{sphere.description}</p>
                </div>
            ))}
        </div>
    </>
);
