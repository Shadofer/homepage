<script lang="ts">
    import ProjectBox from './ProjectBox.svelte';

    interface Project {
        title: string;
        description: string;
        github: string;
        site?: string;
    }

    const projects: Project[] = [
        {
            title: 'Fronvo',
            description:
                'A social media app promoting free speech and tracking-less usage',
            github: 'https://github.com/Fronvo',
            site: 'https://fronvo.com',
        },
        {
            title: 'Litestore',
            description:
                'Your own tracker-less, private, lite-weight online file storage',
            github: 'https://github.com/Shadofer/Litestore',
            site: 'https://litestore.shadofer.com',
        },
        {
            title: 'TowerVerse',
            description:
                'A dungeon-themed online multiplayer game made in Godot',
            github: 'https://github.com/TowerVerse',
        },
        {
            title: 'Ezier',
            description:
                'An organisation aiming to create simple ports of famous JavaScript libraries',
            github: 'https://github.com/Ezier-Project',
        },
        {
            title: 'Homepage',
            description: 'This homepage, showcasing my work.',
            github: 'https://github.com/Shadofer/homepage',
            site: 'https://shadofer.com',
        },
        {
            title: 'Dogey',
            description:
                'A pythonic wrapper of the deprecated stage platform, DogeHouse',
            github: 'https://github.com/Shadofer/dogey',
        },
        {
            title: 'XMAS Counter',
            description: 'A christmas day counter',
            github: 'https://github.com/Shadofer/xmas-counter',
            site: 'https://shadofer.github.io/xmas-counter',
        },
    ];
</script>

<div class="flex flex-col" id="projects">
    {#each projects as { title, description, github, site }}
        <ProjectBox {title} {description} {github} {site} />
    {/each}
</div>
