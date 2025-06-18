export const DarkThemeOrbs = () => (
    <>
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[hsl(var(--glow-pink))] rounded-full filter blur-[120px] opacity-0 dark:opacity-40 animate-orb"></div>
        <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-[hsl(var(--glow-blue))] rounded-full filter blur-[130px] opacity-0 dark:opacity-40 animate-orb animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-[hsl(var(--glow-purple))] rounded-full filter blur-[150px] opacity-0 dark:opacity-30 animate-orb animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[hsl(var(--glow-glow))] rounded-full filter blur-[100px] opacity-0 dark:opacity-35 animate-orb animation-delay-3000"></div>
    </>
);
