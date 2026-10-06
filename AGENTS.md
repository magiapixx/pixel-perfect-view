<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Shared public-site chrome and reusable marketing sections live in `src/components/site`; this keeps all content routes visually consistent.
- Practice and resource detail pages use dynamic TanStack routes backed by typed shared content arrays; this keeps listing and detail content synchronized.
