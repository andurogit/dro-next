import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// precess.cwd() 는 루트 폴더이다.
const postsDirectory = path.join(process.cwd(), 'posts')

// 모든 포스팅 데이터 Id 기준으로 내림차순 정렬하여 리턴
export function getSortedPostsData() {
  // 그냥 fs.readdirSync('posts') 해도 위와 같은 위치이다.
  const fileNames = fs.readdirSync(postsDirectory)

  // PostaData with Map Collection
  // allPostsData 에는 결국 matter 의 결과 값이 담김
  const allPostsData = fileNames.map(fileName => {
    // md 확장자 제거
    const id = fileName.replace(/\.md$/, '')

    // 전체 경로
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // matter 를 이용한 메타데이터 추출
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })

  // Sort post data
  // id 기준으로 정렬
  return allPostsData.sort(({ data: a }, { data: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

// id 만 추출
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  // const processedContent = await remark()
  //   .use(html)
  //   .processSync(matterResult.content).result

  // const contentHtml = processedContent.toString()

  // React remark 쓸거니까 그냥 md 파일 content로 넘김

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
