# Birthday Wish Book

A pink scrapbook wish list. Friends pick a budget, follow the link to buy,
and tap **I'm getting this** so nobody doubles up.

| File | What it is |
| --- | --- |
| `index.html` | The website. You never need to open it. |
| `wishes.js` | Your name, budgets and gifts. **This is the one you edit.** |
| `firebase-config.js` | Switches on reserving. Filled in once. |

## Where it lives

The site is the `main` branch of this repository and is online at
**https://upadhyaykwinel.github.io/**

The portfolio that used to be here is kept, untouched, on the
`portfolio` branch. To bring it back, open **Settings**, then **Pages**,
and change the branch from `main` to `portfolio`.

Right now the site works as a list with buy links. Reserving comes on in
Part 2.

## Part 2: Switch on reserving (about 5 minutes, free)

GitHub can show a page but can't remember who reserved what, so the
reservations are kept in a free Google Firebase database.

1. Go to [console.firebase.google.com](https://console.firebase.google.com),
   sign in with a Google account, and **create a project** (any name;
   you can turn Analytics off).
2. In the left menu open **Build**, then **Firestore Database**, then
   **Create database**. Choose **production mode** and any location.
3. Open the **Rules** tab, replace everything with the block below, and
   click **Publish**:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /claims/{giftId} {
         allow read: if true;
         allow create: if request.resource.data.keys().hasOnly(['at'])
                       && request.resource.data.at is number;
         allow delete: if true;
       }
     }
   }
   ```

4. Click the **gear icon**, then **Project settings**. Under **Your apps**
   click the **</>** (web) icon, give it any nickname, and register it.
5. Firebase shows a `firebaseConfig` block with six values. On GitHub,
   open `firebase-config.js`, click the **pencil**, replace each
   `PASTE_HERE` with the matching value, and **Commit changes**.

Refresh your site after a minute. The **I'm getting this** buttons appear.

## Adding and changing gifts

1. On GitHub open `wishes.js` and click the **pencil**.
2. Copy one gift line, paste it underneath, and change the words:

   ```js
   { name: "Pink film camera", price: 6500, link: "https://shop.example/camera", emoji: "📸", note: "The blush one" },
   ```

3. Click **Commit changes**. The site updates in about a minute.

Good to know:

- The budget tag is chosen from the price. Change the budget names and
  limits at the top of `wishes.js`.
- For a real photo, upload it to the repository and add
  `image: "photo-name.jpg"` to that gift.
- Don't rename a gift once people have started reserving, or its
  "Taken" stamp is lost.

## Keeping it a surprise

At the bottom of the site, tap **I'm the birthday girl: hide what's been
reserved**. On that phone or laptop, every gift looks free from then on.
Do it once on each device you use.

## To un-reserve something for a guest

A guest can undo their own reservation from the same phone or browser
they used. If they can't, open Firebase, then **Firestore Database**,
then the `claims` collection, and delete the entry named after the gift.
Opening that page shows you what's taken, so ask a friend if you want to
stay surprised.
