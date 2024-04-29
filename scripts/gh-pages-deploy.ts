import { publish } from 'gh-pages'

publish(
  'docs', // Viteの出力ディレクトリ
  {
    branch: 'gh-pages', // GitHubのgh-pagesブランチにデプロイ
    repo: 'https://github.com/NozawaDaishi/my-archive.git', // あなたのリポジトリURL
  },
  () => {
    console.log('Deploy Complete!')
  }
)
