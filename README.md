# INFO 343-B In-Class Exercises Repo

**DO NOT FORK THIS REPO.** This repo was created for you by GitHub classroom and is your own personal repo for our in-class exercises. Clone this repo to your development machine so that you can code along with me. And the end of each class, commit and push your changes up to GitHub to save/backup your work.

## Pulling Updates

Before most lectures I'll ask you to "pull updates from the upstream master" to pick up new folders and starter files I've added to the source repo. To do that, follow these steps.

### On a Lab Machine?

The lab machines completely reset when you log out, so you'll have to do all of these steps every time. First, tell git who you are:

```bash
git config --global user.name "Your Name"
git config --global user.email email-address-used-on-github
```

Then clone your exercises repo to your lab machine, and execute these commands **from within the repo directory** to pull the updates:

```bash
git remote add upstream https://github.com/info343b-w18/exercises.git
git pull upstream master
```

If you end up in `vim` to confirm a merge message, just hit `Esc` and type `:wq` (for "write and quit") to accept the default message and get back to your command prompt.

## On Your Own Laptop?

After cloning your exercises repo for the first time, execute this command only once **from within the repo directory** to setup the upstream remote:

```bash
git remote add upstream https://github.com/info343b-w18/exercises.git
```

When I ask you to pull updates, execute this command **from within the repo directory**:

```bash
git pull upstream master
```

If you end up in `vim` to confirm a merge message, just hit `Esc` and type `:wq` (for "write and quit") to accept the default message and get back to your command prompt.
