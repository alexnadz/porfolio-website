

type CommercialProjectsExperienceItemProps = {
    value: string | number;
    label: string;
};

export const CommercialProjectsExperienceItem = ({ value, label }: CommercialProjectsExperienceItemProps) => (
    <div className="p-6 rounded-lg border border-border bg-card">
        <div className="text-3xl font-bold text-primary">
            {value}
        </div>
        <div className="text-sm text-muted-foreground mt-2">{label}</div>
    </div>
);
