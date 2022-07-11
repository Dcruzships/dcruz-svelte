export class Project {
    id: string;
    name: string;
    media: string;
    mediaAlt: string;
    description: string;
    tech: string;
    link: string;
    pic: string;

    constructor(id: number, name: string, media: string, description: string, tech: string, link: string) {
        this.id = `vid${id}`;
        this.name = name;
        this.media = `vid/${media}`;
        this.mediaAlt = `vid/${media.substring(0, (media.length - 5))}.m4v`;
        this.description = description
        this.tech = tech;
        this.link = link;
        this.pic = `img/${media.substring(0, (media.length - 5))}.png`;
    }
}