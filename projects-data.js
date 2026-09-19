// =========================================
// CENTRAL PROJECT DATA
// =========================================
//
// Edit project dates, card titles,
// images, chronological order,
// and featured status here.
//
// index.html and projects.html
// both use this file.
//
// =========================================


const portfolioProjects = [


// =========================================
// FULL-SIZE FORMULA 1 ELECTRIC CAR
// =========================================

{
    id:
        "f1-electric-car",

    title:
        "Full-Size Formula 1 Electric Car",

    category:
        "PERSONAL PROJECT",

    date:
        "June 2026 — Ongoing",

    sortDate:
        "2026-06-01",

    href:
        "projects/f1-electric-car.html",

    image:
        "images/f1-electric-car-timeline-7.jpg",

    imageBase:
        "images/f1-electric-car-timeline-7",

    imageClass:
        "f1-car-card-image",

    featured:
        true
},

    // =========================================
    // WIND TOWER
    // =========================================

{
    id: "static-pressure-measurement-system",

    title: "Static Pressure Measurement System",

    category: "UH WIND TUNNEL RESEARCH LAB",

    date: "May 2025 — April 2026",

    sortDate: "2026-04-30",

    href: "projects/static-pressure-measurement-system.html",

    image: "images/static-pressure-hero.jpg",

    imageBase: "images/static-pressure-hero",

    featured: true
},



    // =========================================
    // GO-KART
    // =========================================

    {
        id: "asme-go-kart",

        title:
            "Go-Kart Competition Project",

        category:
            "ASME UH",

        date:
            "March 2026 — April 2026",

        sortDate:
            "2026-04-30",

        href:
            "projects/asme-go-kart.html",

        image:
            "images/asme-go-kart-hero.jpeg",

        imageBase:
            "images/asme-go-kart-hero",

        featured:
            true
    },



    // =========================================
    // DIESEL GENERATOR
    // =========================================

    {
        id: "diesel-generator",

        title:
            "Diesel Engine Generator",

        category:
            "ASME UH",

        date:
            "March 2026",

        sortDate:
            "2026-03-01",

        href:
            "projects/diesel-generator.html",

        image:
            "images/diesel-generator-hero.jpg",

        imageBase:
            "images/diesel-generator-hero",

        featured:
            true
    },



    // =========================================
    // TESLA COIL
    // =========================================

    {
        id: "tesla-coil",

        title:
            "Tesla Coil Project",

        category:
            "ASME UH",

        date:
            "November 2025",

        sortDate:
            "2025-11-01",

        href:
            "projects/tesla-coil.html",

        image:
            "images/tesla-coil-hero.jpg",

        imageBase:
            "images/tesla-coil-hero",

        imageClass:
            "tesla-coil-card-image",

        featured:
            false
    },



    // =========================================
    // CONSTANT TEMPERATURE ANEMOMETER
    // =========================================

    {
        id: "cta",

        title:
            "Constant Temperature Anemometer",

        category:
            "UH WIND TUNNEL RESEARCH LAB",

        date:
            "July 2025",

        sortDate:
            "2025-07-01",

        href:
            "projects/cta.html",

        image:
            "images/cta-hero.jpg",

        imageBase:
            "images/cta-hero",

        featured:
            true
    },



    // =========================================
    // 6-AXIS ROBOTIC ARM
    // =========================================

    {
        id: "robotic-arm",

        title:
            "6-Axis Robotic Arm",

        category:
            "ASME UH",

        date:
            "March 2025",

        sortDate:
            "2025-03-01",

        href:
            "projects/robotic-arm.html",

        image:
            "images/robotic-arm-hero.jpg",

        imageBase:
            "images/robotic-arm-hero",

        featured:
            false
    },



    // =========================================
    // FINGER-CONTROLLED PROSTHETIC HAND
    // =========================================

    {
        id:
            "finger-controlled-prosthetic-hand",

        title:
            "Finger-Controlled Prosthetic Hand",

        category:
            "PERSONAL PROJECT",

        date:
            "December 2024",

        sortDate:
            "2024-12-01",

        href:
            "projects/finger-controlled-prosthetic-hand.html",

        image:
            "images/finger-prosthetic-hand-hero.jpg",

        imageBase:
            "images/finger-prosthetic-hand-hero",

        fallbackImage:
            "images/finger-controlled-prosthetic-hand.svg",

        featured:
            false
    },



    // =========================================
    // AR SANDBOX
    // =========================================

    {
        id:
            "ar-sandbox",

        title:
            "Augmented Reality Sandbox",

        category:
            "ASME UH",

        date:
            "October 2024",

        sortDate:
            "2024-10-01",

        href:
            "projects/ar-sandbox.html",

        image:
            "images/ar-sandbox-hero.JPG",

        imageBase:
            "images/ar-sandbox-hero",

        featured:
            true
    },



    // =========================================
    // EYE-CONTROLLED PROSTHETIC ARM
    // =========================================

    {
        id:
            "eye-controlled-prosthetic-arm",

        title:
            "Eye-Controlled Prosthetic Arm",

        category:
            "PERSONAL PROJECT",

        date:
            "December 2023 — April 2024",

        sortDate:
            "2024-04-30",

        href:
            "projects/eye-controlled-prosthetic-arm.html",

        image:
            "images/eye-prosthetic-arm-hero.jpg",

        imageBase:
            "images/eye-prosthetic-arm-hero",

        fallbackImage:
            "images/eye-controlled-prosthetic-arm.svg",

        featured:
            false
    },



    // =========================================
    // ELBOW-CONTROLLED PROSTHETIC ARM
    // =========================================

    {
        id:
            "elbow-controlled-prosthetic-arm",

        title:
            "Elbow-Controlled Prosthetic Arm",

        category:
            "PERSONAL PROJECT",

        date:
            "April 2023",

        sortDate:
            "2023-04-01",

        href:
            "projects/elbow-controlled-prosthetic-arm.html",

        image:
            "images/elbow-prosthetic-arm-hero.jpg",

        imageBase:
            "images/elbow-prosthetic-arm-hero",

        featured:
            false
    },



    // =========================================
    // IRON MAN SUIT
    // =========================================

    {
        id:
            "iron-man-suit",

        title:
            "Iron Man Suit",

        category:
            "PERSONAL PROJECT",

        date:
            "October 2022 — November 2022",

        sortDate:
            "2022-11-30",

        href:
            "projects/iron-man-suit.html",

        image:
            "images/iron-man-hero.jpg",

        imageBase:
            "images/iron-man-hero",

        imageClass:
            "iron-man-card-image",

        featured:
            false
    }

];



/* =========================================
   SORT NEWEST → OLDEST
   ========================================= */

function sortedProjects(projects) {

    return [...projects].sort(

        (a, b) =>

            new Date(b.sortDate) -
            new Date(a.sortDate)

    );

}



/* =========================================
   CREATE ONE PROJECT CARD
   ========================================= */

function createProjectCard(project) {


    const imageClass =
        project.imageClass

            ? `project-image ${project.imageClass}`

            : "project-image";


    const fallbackAttribute =
        project.fallbackImage

            ? `data-fallback-image="${project.fallbackImage}"`

            : "";


    return `

        <a class="project-card"
           href="${project.href}">


            <div class="project-image-wrap">


                <img class="${imageClass}"

                     src="${project.image}"

                     data-image-base="${project.imageBase}"

                     ${fallbackAttribute}

                     onerror="tryProjectImageExtension(this)"

                     alt="${project.title}">


                <div class="project-overlay">


                    <div class="project-meta-row">


                        <span class="project-category">

                            ${project.category}

                        </span>


                        <span class="project-date">

                            ${project.date}

                        </span>


                    </div>


                    <h3>

                        ${project.title}

                    </h3>


                    <span class="view-project">

                        View Project →

                    </span>


                </div>


            </div>


        </a>

    `;

}



/* =========================================
   RENDER PROJECT CARDS
   ========================================= */

function renderProjectCards() {


    const allProjectsGrid =
        document.getElementById(
            "allProjectsGrid"
        );


    const featuredProjectsGrid =
        document.getElementById(
            "featuredProjectsGrid"
        );


    const ordered =
        sortedProjects(
            portfolioProjects
        );



    /* ALL PROJECTS PAGE */

    if (allProjectsGrid) {

        allProjectsGrid.innerHTML =

            ordered
                .map(createProjectCard)
                .join("");

    }



    /* HOMEPAGE FEATURED PROJECTS */

    if (featuredProjectsGrid) {

        featuredProjectsGrid.innerHTML =

            ordered

                .filter(
                    project =>
                        project.featured
                )

                .map(
                    createProjectCard
                )

                .join("");

    }

}



/* =========================================
   IMAGE EXTENSION FALLBACK
   ========================================= */

function tryProjectImageExtension(image) {


    const extensions = [

        ".jpg",
        ".JPG",

        ".jpeg",
        ".JPEG",

        ".png",
        ".PNG",

        ".webp",
        ".WEBP",

        ".svg",
        ".SVG"

    ];


    const base =
        image.getAttribute(
            "data-image-base"
        );


    let tried = (

        image.getAttribute(
            "data-tried-extensions"
        ) || ""

    )
        .split("|")
        .filter(Boolean);



    const currentSrc =
        image.getAttribute("src") || "";


    const currentMatch =
        currentSrc.match(
            /(\.[^./?#]+)(?:[?#].*)?$/
        );


    if (
        currentMatch &&
        !tried.includes(
            currentMatch[1]
        )
    ) {

        tried.push(
            currentMatch[1]
        );

    }



    const nextExtension =

        extensions.find(

            extension =>
                !tried.includes(
                    extension
                )

        );



    if (nextExtension) {


        tried.push(
            nextExtension
        );


        image.setAttribute(

            "data-tried-extensions",

            tried.join("|")

        );


        image.src =
            base + nextExtension;


        return;

    }



    const fallback =

        image.getAttribute(
            "data-fallback-image"
        );


    if (fallback) {

        image.onerror = null;

        image.src =
            fallback;

        return;

    }


    image.onerror = null;

}



/* =========================================
   PROJECT PAGE DATE
   ========================================= */

/*
   Individual project pages can use:

   <span data-project-date></span>

   and the date will automatically
   come from this file.
*/

function fillProjectPageDate() {


    const dateElement =
        document.querySelector(
            "[data-project-date]"
        );


    if (!dateElement) {

        return;

    }


    const filename =

        window.location.pathname

            .split("/")

            .pop()

            .replace(
                ".html",
                ""
            );


    const project =

        portfolioProjects.find(

            item =>
                item.id === filename

        );


    if (project) {

        dateElement.textContent =
            project.date;

    }

}



/* =========================================
   RUN
   ========================================= */

document.addEventListener(

    "DOMContentLoaded",

    () => {


        renderProjectCards();

        fillProjectPageDate();


    }

);