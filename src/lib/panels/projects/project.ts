export class Project {
    id: string;
    name: string;
    media: string;
    mediaAlt: string;
    description: string;
    tech: string;
    link: string;

    constructor(id: number, name: string, media: string, description: string, tech: string, link: string) {
        this.id = `vid${id}`;
        this.name = name;
        this.media = `static/vid/${media}`;
        this.mediaAlt = `static/vid/${media.substring(0, (media.length - 5))}.m4v`;
        this.description = description
        this.tech = tech;
        this.link = link;
    }
}