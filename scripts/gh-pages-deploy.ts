import { publish } from 'gh-pages'

publish(
  'docs', // Viteの出力ディレクトリ
  {
    branch: 'gh-pages', // GitHubのgh-pagesブランチにデプロイ
    repo: 'https://github.com/[YOUR_USERNAME]/[REPO_NAME].git', // あなたのリポジトリURL
  },
  () => {
    console.log('Deploy Complete!')
  }
)
