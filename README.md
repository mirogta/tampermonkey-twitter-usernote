# tampermonkey-twitter-usernote

Tampermonkey script to add custom notes to Twitter users

## What does it do

Adds an input box next to an user on Twitter website.

The content of the input box is stored for each Twitter user.

## How to install

1. Install Tampermonkey browser extension (for [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/), [Microsoft Edge](https://www.microsoft.com/store/apps/9NBLGGH5162S))
2. Go to [Twitter_User_Note in OpenUserJS](https://openuserjs.org/scripts/mirogta/Twitter_User_Note)
3. Click on the "Install" button

Then you can go to [twitter.com](https://twitter.com) and use the improvements on any user's page.

## Compatibility

* Firefox >= 14
* Chrome >= 18
* Microsoft Edge >= 12

### Compatibility checklist

* https://caniuse.com/#feat=querySelector - IE >=9, Edge >=12, Firefox >=3.5, Chrome >=4, Safari >=3.1, Opera >=10
* https://caniuse.com/#feat=mutationobserver - IE >=11, Edge >=12, Firefox >=14, Chrome >=18, Safari >=6, Opera >=15

## How to update

Tampermonkey checks for a new version of this script daily by default.

If you want to trigger an ad-hoc update of a newer version:

* Go to Tampermonkey -> Installed userscripts
* Tick the checkbox next to the "Twitter User Note"
* In the "Please choose an option" dropdown, select "Trigger update"
* Click on the "Start" button next to the dropdown

## License

Licensed under [MIT License](./LICENSE).

## Technology Used

* Twitter
* VanillaJS
* OpenUserJS
* TamperMonkey
