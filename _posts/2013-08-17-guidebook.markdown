---
layout: guidebook
permalink: guidebook/index.html
---
# Intro to the Guidebook

Welcome to the Campus Data Guidebook! We hope this can help you start your campus data project. This is a living document
created by students from a variety of schools; we'd like to give you tips and share our stories. This book contains different
experiences from various institutions, so we might not agree all the time, but we're all striving towards the same goals.
Figure out what works best for your school. As you work on campus data and overcome hurdles, send us a pull request to
[share your story](https://github.com/campusdata/campusdata.github.io/). Help us fight for open data everywhere!

### Administrative Problems

*Defense - Making sure administration doesn’t quash initiatives*

#### Make friends with faculty

At Carnegie Mellon, we originally started our campus data initiative as a weekend project to scrape and parse some HTML.
It was when we realized students were getting in trouble for using campus data that we decided we wanted to pursue this
from a policy perspective as well. We found it useful to get some distinguished faculty to be on our side. These faculty
members didn’t always understand or care to understand administration, but were nonetheless good people to defend us.
We also gained the favor of the School of Computer Science undergraduate dean, who helped protect us before we were
officially recognized. - **[Amy Quispe][amy], [ScottyLabs][scottylabs]**

#### Forgiveness, not permission

At Columbia, we have an extensive bureaucracy that claims control over the school as a whole. Our campus data project
started as an effort to make (like many peer institutions) a modernized course scheduling application. The Center
for Student Advising expected students to build schedules by hand each semester, with the help of an online class
bulletin with times, section call numbers, courses, and the like. We figured that it would be both easier and faster
to ask for forgiveness rather than permission, and so started by scraping the data off of the course bulletin.
We transitioned to working directly with administration after our course builder gained traction within the student
body, and so came in with a fair amount of negotiating leverage. - **[Robert Ying][robert], [ADI][adi]**


#### Be proactive about their fears

Early on, I met with a senior IT director in the Engineering school. She told me that about half a decade ago,
the CS club had a bunch of servers that they used in engineering, but after abusive behavior the permissions were
revoked.  “That’s not us,” I told her, and explained our mission in detail.  I explained that we were only looking
for read-only data to start with, and that for any data beyond that we’d have API keys and that we’d be able to
track who asked for what data.  The IT department had a reasonable shot of blocking our progress; making them
comfortable avoided a huge issue. - **[Alexey Komissarouk][alexey], [PennApps Labs][pennapps]**


*Offense - Getting administration excited*

#### Do something big, and well

Administration was only mildly threatened by the existence of ScottyLabs at the beginning; our existence wasn’t
known to many. It was after we organized our first hackathon, TartanHacks, that suddenly we were getting praise.
The school had never seen an initiative like this come out of their computer scientists, and were excited to see
what kind of innovation we could bring. The success of our first hackathon suddenly make the administration highly
compliant. - **[Amy Quispe][amy], [ScottyLabs][scottylabs]**



#### Make the administration look good

It’s a lot easier to support an initiative if doing so helps you. We were funded by the Student Government and the
Provost’s office, both of which benefitted from being perceived as innovative.  We gave them as much credit as we
could, and they returned in kind by helping promote the things we created. - **[Alexey Komissarouk][alexey], [PennApps Labs][pennapps]**



#### Talk about stuff they care about

Due to the student response following the release of courses, we were able to arrange data dumps for specific data
(courses, events, alumni affairs, housing) for our own applications. We had significant support from the CS department
at Columbia, in part because of an increased undergraduate enrollment in the CS program. In particular, we found that
the CS undergraduate dean was helpful in pitching the ideas of open data to tenured professors and lecturers.
Alumni were also vocal in their support of open data, mirroring the NYC big data initiatives. - **[Robert Ying][robert], [ADI][adi]**



#### Centralization means apps break less

At uWaterloo, one of the common problems across campus was that students developers would write their own scrapers,
make services and distribute it to other students. When those scrapers break, everyone else dependent of the apps
would suffer and the patch times would vary on the developer’s availability. Having an university managed API, even
if data isn’t coming from university feeds, being a central source for providing scraped data does wonders. 
This way, when something breaks, a fix is only required at one place. - **[Kartik Talwar][kartik], [UW OpenData][uw]**


#### Screw everything, raise money

PennApps Labs’ first (and so far, only) non-university funding was an earmarked $5,000 donation from a recent CS
alum who had just sold his company for boatloads of money.  That was nice, because whenever we wanted to work on
something that we never explicitly got chartered for, we’d have the ability to point to the funding that was
specifically allocated to us.   Possible sources of independent-ish funding: Sunlight Foundation OpenGov Grants,
Mozilla Grants, Google.org, successful alumni, Hackathon Partnership (allocate part of the money raised for your
school’s hackathon to campus data), traditional tech companies, and your city’s data initiative (Philly has Philly
Data, for example).  A side benefit of having independent funding is that the powers that be are a lot more
comfortable supporting something that is clearly already happening. - **[Alexey Komissarouk][alexey], [PennApps Labs][pennapps]**


### Data Collection

*Obtaining usable data and working with poorly formatted data*

#### Cron is a wonderful thing

Scraped or unscraped, polling for updates can be done via cron and to a great granularity. At Waterloo, we scrape
most of the data that powers the API, but the crons also function as notifiers to confirm if the scraper still works.
Scraped data is volatile but having checks and disclaimers about the update frequency and consistency for the data
makes a big difference. - **[Kartik Talwar][kartik] , [uWaterloo OpenData][uw]**


#### Scrape, but not too often

Scrapers are never perfect, and what a computer can successfully parse is a small subset of people can understand.
Different departments / organizations, too, may have completely different methods of keeping internal records.
At Columbia, we found that we had to repair or rewrite our data parsers on at least a semesterly basis, to the point
where we would rather have outdated data without errors than errors introduced by untested scrapers. Time is limited,
and a proof of concept is more important than a perfect app. We started marketing our applications at a time when
they worked well only for maybe 90% of users, but it was enough to gain mindshare. Now, we've got regular
machine-readable data dumps from the registrar. - **[Robert Ying][robert], [ADI][adi]**


#### Get cross-promoted by your data sources

One of the things I wish I’d done earlier was to get the various data sources to link to us. We wrote a registrar API
to avoid scraping, but I know of at least a few projects who re-scraped for their projects. We built a room reservation
aggregator, but most students continued to use the library’s reservation system.  The solution to both of those problem
is to get buy-in from [the registrar/the library] to prominently include links saying, effectively: "Here’s where you go
if you want this. Don’t scrape, your problem has already been addressed properly." - **[Alexey Komissarouk][alexey], [PennApps Labs][pennapps]**


### Working with the Community

*Developers - Enabling developers to create things with open data*


#### Host a Hackathon

Hackathons are the perfect venue to promote APIs. Students are very eager to try to solve problems that they see around
them, and so are often excited to use campus data if they know it's available. This can also be incentivized through prizes
and promises of school adoption.
The original concept behind [TartanHacks](http://tartanhacks.com/) was that we would create a hackathon to promote
our own APIs. - **[Amy Quispe][amy], [ScottyLabs][scottylabs]**


#### Work with professors to enrich existing classes

Many colleges now offer courses in “application development”. At UPenn, students in the CIS 350 (Software Engineering)
course follow an agile development schedule to create an Android application for outside clients. PennApps Labs worked
with the professor to determine the proper scope for a client project, namely mobile versions for two of our web-based
applications, and provided APIs and access to our resources to four student teams. A Labs representative (i.e., me) met
with each team for half an hour each week to provide feedback on the iterations. Though the final products needed polish,
we were very happy with the results. It also got students interested in, and invested in, PennApps Labs. Many courses
have a final project—look into working with iOS/Android classes, data systems classes, whatever—it never hurts to ask! - **[Amalia Hawkins][amalia], [PennApps Labs][pennapps]**


#### Offer Prizes

One idea we’d been kicking for a couple of years was to host a demo event at the end of every semester where members of
the community were encouraged to show off their work.  Students who build stuff on top of your APIs would get some sort
of prize - probably something small like an iPad Mini - and an invitation to dinner with the team, as well as a mention
on your website/twitter account.  The prize isn’t itself the goal. You’re trying to convince that hackers who take the
time to build useful things for their peers deserve recognition and respect. - **[Alexey Komissarouk][alexey], [PennApps Labs][pennapps]**


#### Feature Creations

Most students just like to play around with the available data but don’t like showing what they’ve done.
Having a place that simply lists what other’s have done with the data can be a great motivator for others
to try to do something different, better or new. (http://wattools.com) - **[Kartik Talwar][kartik], [uWaterloo OpenData][uw]**


### Continuity

*Making organizations and initiatives that last*

#### Have a Constitution

The student government asked PennApps Labs to write a [constitution](https://docs.google.com/document/d/169lcMzPJEEg_A-9aw-3OR7WyT2nnH0RS-_6TlDt4Zzo/edit?authkey=CPHXqNkB) before we would receive their funding support.
As a result, we had to think through how leadership would get passed down, how responsibility would be separated and
what we’d be accountable for.  Our current model is Sith-based - two student leaders, a master and an apprentice,
with a jump every semester or so.  Time will tell is a year is too short. - **[Alexey Komissarouk][alexey], [PennApps Labs][pennapps]**


#### Look for mission-driven individuals

Before ScottyLabs was founded, there was another earlier attempt to create a team to make APIs for school data,
which failed for a variety of reasons, but in part because the team did not care about the mission as much as they did hanging out with each other. When ScottyLabs was founded, we didn't all know each other. However, we pulled in people one at a time; each person that we pulled in was needed for their unique skillset, and was sold foremost on what we were trying to create. - **[Amy Quispe][amy], [ScottyLabs][scottylabs]**

[amy]: http://twitter.com/amyquispe
[scottylabs]: http://scottylabs.org
[robert]: http://robertying.com
[adi]: http://adicu.com
[alexey]: http://alexeymk.com
[pennapps]: http://labs.pennapps.com
[amalia]: https://twitter.com/starsseldomseen
[kartik]: http://kartikt.com
[uw]: http://api.uwaterloo.ca
