function filter() {
    const refs = {
        allFilterBtn: document.querySelector("[data-portfolio-all-button]"),
        webSiteFilterBtn: document.querySelector("[data-portfolio-webSite-button]"),
        appFilterBtn: document.querySelector("[data-portfolio-application-button]"),
        designFilterBtn: document.querySelector("[data-portfolio-design-button]"),
        marketingFilterBtn: document.querySelector("[data-portfolio-marketing-button]"),

        webSiteList: document.querySelectorAll("[data-portfolio-webSite]"),
        appList: document.querySelectorAll("[data-portfolio-application]"),
        designList: document.querySelectorAll("[data-portfolio-design]"),
        marketingList: document.querySelectorAll("[data-portfolio-marketing]"),
      };

    refs.allFilterBtn.addEventListener('click', () => {
        refs.webSiteList.forEach(i => {
            i.classList.remove('visually-hidden');
        });

        refs.appList.forEach(i => {
            i.classList.remove('visually-hidden');
        });

        refs.designList.forEach(i => {
            i.classList.remove('visually-hidden');
        });

        refs.marketingList.forEach(i => {
            i.classList.remove('visually-hidden');
        });
    })

    refs.webSiteFilterBtn.addEventListener('click', () => {
        refs.webSiteList.forEach(i => {
            i.classList.remove('visually-hidden');
        });

        refs.appList.forEach(i => {
            i.classList.add('visually-hidden');
        });

        refs.designList.forEach(i => {
            i.classList.add('visually-hidden');
        });

        refs.marketingList.forEach(i => {
            i.classList.add('visually-hidden');
        });
    })

    refs.appFilterBtn.addEventListener('click', () => {
        refs.webSiteList.forEach(i => {
            i.classList.add('visually-hidden');
        });

        refs.appList.forEach(i => {
            i.classList.remove('visually-hidden');
        });

        refs.designList.forEach(i => {
            i.classList.add('visually-hidden');
        });

        refs.marketingList.forEach(i => {
            i.classList.add('visually-hidden');
        });
    })

    refs.designFilterBtn.addEventListener('click', () => {
        refs.webSiteList.forEach(i => {
            i.classList.add('visually-hidden');
        });

        refs.appList.forEach(i => {
            i.classList.add('visually-hidden');
        });

        refs.designList.forEach(i => {
            i.classList.remove('visually-hidden');
        });

        refs.marketingList.forEach(i => {
            i.classList.add('visually-hidden');
        });
    })

    refs.marketingFilterBtn.addEventListener('click', () => {
        refs.webSiteList.forEach(i => {
            i.classList.add('visually-hidden');
        });

        refs.appList.forEach(i => {
            i.classList.add('visually-hidden');
        });

        refs.designList.forEach(i => {
            i.classList.add('visually-hidden');
        });

        refs.marketingList.forEach(i => {
            i.classList.remove('visually-hidden');
        });
    })
}

filter();