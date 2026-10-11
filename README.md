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

GitHub can show a page but can't remember who reserved what, so that is
kept in a free Google Firebase database.

1. Go to [console.firebase.google.com](https://console.firebase.google.com),
   sign in with a Google account, and **create a project** (any name;
   you can turn Analytics off).
2. In the left menu open **Build**, then **Authentication**, then
   **Get started**. On the **Sign-in method** tab choose **Anonymous**,
   switch it on, and **Save**. (Guests never see a login screen. This
   quietly gives each guest's browser its own ID.)
3. Open **Build**, then **Firestore Database**, then **Create database**.
   Choose **production mode** and any location.
4. Open the **Rules** tab, replace everything with the block below, and
   click **Publish**:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {

       // users table: each guest can read and write only their own row
       match /users/{uid} {
         allow read: if request.auth != null && request.auth.uid == uid;
         allow create, update: if request.auth != null && request.auth.uid == uid
           && request.resource.data.keys().hasOnly(['name', 'updatedAt'])
           && request.resource.data.name is string
           && request.resource.data.name.size() <= 40;
       }

       // gifts table: anyone can see what's taken. A guest can only add,
       // rename or remove THEMSELVES in a gift's list of buyers.
       match /gifts/{giftId} {
         allow read: if true;
         allow create: if request.auth != null && fieldsOk()
           && after().keys().hasOnly([me()]) && me() in after()
           && request.resource.data.status in ['taken', 'sharing'];
         allow update: if request.auth != null && fieldsOk()
           && after().diff(resource.data.buyers).affectedKeys().hasOnly([me()])
           && (
             // already one of the buyers: rename, leave, open or close sharing
             (me() in resource.data.buyers && statusFits())
             // not a buyer yet: take a free gift, or join one open for sharing
             || (!(me() in resource.data.buyers) && me() in after() && (
                  (resource.data.buyers.size() == 0
                    && request.resource.data.status in ['taken', 'sharing'])
                  || (resource.data.status == 'sharing'
                    && request.resource.data.status == 'sharing')))
           );

         function me() { return request.auth.uid; }
         function after() { return request.resource.data.buyers; }
         function fieldsOk() {
           return request.resource.data.keys().hasOnly(
               ['name', 'price', 'status', 'buyers', 'updatedAt'])
             && after() is map
             && (!(me() in after())
                 || (after()[me()] is string && after()[me()].size() <= 40));
         }
         function statusFits() {
           return after().size() == 0
             ? request.resource.data.status == 'available'
             : request.resource.data.status in ['taken', 'sharing'];
         }
       }
     }
   }
   ```

5. Click the **gear icon**, then **Project settings**. Under **Your apps**
   click the **</>** (web) icon, give it any nickname, and register it.
6. Firebase shows a `firebaseConfig` block with six values. On GitHub,
   open `firebase-config.js`, click the **pencil**, replace each
   `PASTE_HERE` with the matching value, and **Commit changes**.

Refresh your site after a minute. The **I'm getting this** buttons appear.
If the site says it couldn't load what's reserved, check steps 2 and 4.

## How reserving and sharing work

The first time a guest reserves anything, the site asks for their name.
Each free gift then has two buttons:

- **I'm getting this**: the gift is theirs and shows as "Taken" with
  their name.
- **Split it with someone**: the gift shows as "Sharing" with their name
  and a **Join in** button, so other guests can add themselves. The card
  shows roughly what each person would pay.

Anyone buying a gift can tap **Changed my mind** to drop out; when the
last person drops out the gift is free again. They can also switch a
gift between closed and open with **Open it up to share** and **Stop
taking joiners**. Guests sort out the money between themselves; the site
only shows who is in.

The database has two tables (Firebase calls them collections):

**`gifts`**: one row per gift. A row appears the first time someone
reserves that gift, and is updated from then on.

| Field | Meaning |
| --- | --- |
| `name`, `price` | Copied from `wishes.js` so the row is easy to read |
| `status` | `available`, `taken`, or `sharing` (open for others to join) |
| `buyers` | Everyone buying it: each guest's ID (matches a row in `users`) with their name |
| `updatedAt` | When it last changed |

**`users`**: one row per guest, named by their ID.

| Field | Meaning |
| --- | --- |
| `name` | The name they typed |
| `updatedAt` | When they last set it |

A guest's ID belongs to the browser they used, so they need the same
phone or laptop to drop out of a gift. Names are typed, not verified,
and anyone with the link can see who reserved what.

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

If a guest can't drop out themselves, open Firebase, then **Firestore
Database**, then the `gifts` table, and open that gift's row. Delete
their entry inside `buyers`; if nobody is left, also change `status` to
`available`. Opening that page shows you who is buying what, so ask a
friend if you want to stay surprised.
