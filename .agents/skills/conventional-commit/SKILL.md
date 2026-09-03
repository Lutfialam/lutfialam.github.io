---
name: conventional-commit
description: Prompt and workflow for generating conventional commit messages. Guides users to create standardized, descriptive commit messages following the Conventional Commits specification.
---

# Conventional Commit Skill

Use when user asks about commit messages, conventional commits, or wants to format a git commit.

## Workflow

1. Run `git status` to review changed files.
2. Run `git diff` or `git diff --cached` to inspect changes.
3. Construct commit message using the structure below.
4. Run `git commit -m "type(scope): description"` with the generated message.

## Commit Message Structure

```
type(scope): description

[optional body]

[optional footer(s)]
```

### Types

| Type | Usage |
|------|-------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, missing semicolons, etc (no code change) |
| `refactor` | Code change that neither fixes bug nor adds feature |
| `perf` | Performance improvement |
| `test` | Adding/updating tests |
| `build` | Build system or external dependencies |
| `ci` | CI configuration/scripts |
| `chore` | Other changes (maintenance, tooling) |
| `revert` | Revert a previous commit |

### Scope

Optional but recommended. Examples: `auth`, `ui`, `api`, `db`, `config`

### Description

Required. Imperative mood (e.g. "add" not "added" or "adds"). No period at end.

### Body (optional)

Multi-line explanation. Use blank line after description.

### Footer (optional)

- `BREAKING CHANGE:` for breaking changes (or append `!` after type/scope)
- `Closes #123`, `Fixes #456` for issue references

## Examples

```
feat(auth): add OAuth2 login flow
fix(ui): correct button alignment on mobile
docs: update API documentation
refactor(parser): extract tokenizer module
feat!: drop support for Node 16
chore: update dependencies
```

## Validation

- Type must be one of the allowed types.
- Description must use imperative mood.
- Breaking changes marked with `!` or `BREAKING CHANGE:` footer.
- No period at end of description line.
