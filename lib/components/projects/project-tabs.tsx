'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/lib/ui/tabs';
import { CommercialProjects } from './commercial-projects/commercial-projects';
import { PersonalProjects } from './personal-projects/personal-projects';

export const ProjectTabs = () => (
    <Tabs defaultValue="commercial" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="commercial">Commercial Projects</TabsTrigger>
            <TabsTrigger value="personal">Personal Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="commercial" className="mt-6">
            <CommercialProjects />
        </TabsContent>

        <TabsContent value="personal" className="mt-6">
            <PersonalProjects />
        </TabsContent>
    </Tabs>
);
