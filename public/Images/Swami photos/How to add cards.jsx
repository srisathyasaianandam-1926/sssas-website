'photo-new-event': {
    type: 'photo', // or 'video'
        title: "My New Event",
            subtitle: "April 2025",
                description: "A wonderful description of the event goes here.",
                    media: [
                        "https://link-to-your-image-1.jpg",
                        "https://link-to-your-image-2.jpg",
                        // Add as many images as you like here
                    ]
},

** 2. Add the Card to the Grid **
    Scroll down to the ` {/* PHOTOS TAB */} ` or ` {/* VIDEOS TAB */} ` section in the JSX.Look for the four columns labeled` {/* PHOTO COLUMN 1 */} `, etc. 

Copy an existing card block(the entire`<div className="reveal-wrapper...` section) and paste it into one of those columns.Ensure you update:
1. The ** `onClick` ** function to match the exact ID you created in step 1: `onClick={() => openGallery('photo-new-event')}`
2. The ** image`src` ** inside the card to show a preview thumbnail.
3. The ** subtitle and title ** strings inside the`<div className="card-content-overlay">`.