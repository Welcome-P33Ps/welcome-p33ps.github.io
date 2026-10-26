# P33Ps site

Static GitHub Pages site. Plain HTML and CSS plus one small script (`clock.js`). No build step, no third-party requests.

## Files

- `index.html` (Perimeter), `zero-trust.html`, `authentication.html`, `404.html`: the pages. The home page must stay named `index.html`.
- `styles.css`: all styling (system fonts only)
- `clock.js`: the floating world clock; reads the visitor's own device time, no network use
- `images/`: photos, re-encoded with all metadata removed
- `favicon.svg`: site icon

## Privacy choices built in

- Content Security Policy meta tag allows only scripts and styles from this site, so inline code and external requests are blocked
- `no-referrer` policy, plus `noopener noreferrer` on outbound links
- No analytics, cookies, web fonts, CDNs, or embedded media
- No real name, employer, location, or email address anywhere in the markup

## Keep it that way

- Strip metadata from any image before adding it (`exiftool -all= file.jpg`)
- Commit with your GitHub noreply address (`git config user.email "ID+USERNAME@users.noreply.github.com"`)
- Check each new page for names, dates, and internal tool details before you push
