// App header

Vue.component('app-header', {
    template: `    <header class="app-header">
        <h2 class="app-header__title">#_general</h2>
        <header-search-form/>
    </header>`
});

Vue.component('header-search-form', {
    template: `
        <form class="search-form">
            <input type="search" placeholder="Search" class="reset-text search-field">
        </form>
    `
})

// App sidebar

Vue.component('app-sidebar', {
    template: `<aside class="app-sidebar">
                <h1 class="app-sidebar__title">De Voorhoede</h1>
                <user-profile/>
                <channel-list/>
            </aside> `
});

Vue.component('user-profile', {
    template: `<div class="user-profile">
                    <label for="name" class="user-profile__label">Name</label>
                    <input type="text" id="name" value="Anoniempje" class="reset-text user-profile__name">
                </div>`
});

Vue.component('channel-list', {
    template: `<div class="channel-list">
                    <h2 class="channel-list__header">Channels</h2>
                    <ul>
                        <li class="channel-list__item channel-list__item--current">
                            <span class="channel-list__bullet">#</span> Daily
                        </li>
                        <li class="channel-list__item">
                            <span class="channel-list__bullet">#</span> General
                        </li>
                    </ul>
                </div>`
});

// Chat section

Vue.component('app-chat-section', {
    template: `<section class="chat-section">
                <div class="chat-section__messages">
                    <message-list/>
                </div> 
                <message-field/>
            </section>`
});

Vue.component('message-list', {
    template: `<div class="message-list">
                    <!-- <div class="message-list__empty">No messages</div> -->

                    <ol class="message-list__list">
                        <li class="message">
                            <div class="message__header">
                                <img src="images/avatar.png" class="message__avatar"> 
                                <strong>Anoniempje</strong> 
                                <span class="message__date">11:23:09</span>
                            </div>
                            <div class="message__content">
                                hello world
                            </div>
                        </li>
                    </ol>
                </div>`
});

Vue.component('message-field', {
    template: `<form class="message-field chat-section__field">
                    <input type="text" autofocus placeholder="Message" class="reset-text message-field__input">
                    <input type="submit" disabled class="message-field__submit">
                </form>`
});

// Search sidebar

Vue.component('app-search-sidebar', {
    template: `<aside class="search-sidebar">
                <button aria-label="Close" title="Close" class="reset-button search-sidebar__close"></button> 
                <h2 class="search-sidebar__header">0 Messages</h2>
                <search-message-list/>
            </aside>`
});

Vue.component('search-message-list', {
    template: `<div class="message-list">
                    <!-- <div class="message-list__empty">No messages found for ""</div> -->

                    <ol class="message-list__list">
                        <li class="message">
                            <div class="message__header">
                                <img src="images/avatar.png" class="message__avatar">
                                <strong>Anoniempje</strong> 
                                <span class="message__date">11:23:09</span>
                            </div>
                            <div class="message__content">
                                hello world
                            </div>
                        </li>
                    </ol>
                </div>`
});

const app = new Vue({
    el: '.app',
    template: `<div class="app app--searching">
        <app-header/>
        <app-sidebar/>
        <app-chat-section/>
        <app-search-sidebar/>
    </div>`
});

Vue.config.devtools = true;
