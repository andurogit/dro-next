import {
  Container,
  Heading,
  SimpleGrid,
  ListItem,
  UnorderedList,
  Tag
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Title } from '../components/worksComp'
import P from '../components/paragraph'
import {
  ASP,
  MSSQL,
  HTML,
  CSS,
  SPRING,
  MYSQL,
  JAVA,
  JavaScript,
  AMChart,
  DynamicCRM,
  DOTNET,
  IIS,
  JSP,
  CYBASE,
  GAUS,
  DevExpress,
  AWS,
  MariaDB,
  Tomcat,
  XPlatform,
  Oracle,
  WebLogic,
  ODI,
  STURTS,
  MyBuilder,
  TiberoDB,
  NexaCro,
  TOS,
  KETTLE,
  Essbase,
  WEBIX,
  LoDash,
  SockJs,
  GO,
  FileSaver,
  DhxGrid,
  SPRINGBOOT,
  UNDERTOW,
  MOBX
} from '../components/skillBadge'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <Layout>
            <Container>
              <Title>
                W사 <Tag>2015</Tag>
              </Title>

              <P>페이지 컨버팅 (flash 에서 html) 및 관리자 페이지 개발</P>

              <UnorderedList ml={4} my={4}>
                <ListItem>
                  flash 웹접근 성에 위배되어 html 로 컨버팅 작업
                </ListItem>
                <ListItem>회원 관리, 유저 관리</ListItem>
                <ListItem>회원 정보 마이그레이션</ListItem>
              </UnorderedList>
              <ASP />
              <MSSQL />
              <HTML />
              <CSS />
            </Container>
          </Layout>
        </Section>
        <Section delay={0.1}>
          <Layout>
            <Container>
              <Title>
                S사 <Tag>2016</Tag>
              </Title>
              <P>S사 소음측정 Data 수집 및 Dashboard</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>
                  소음 측정 데이터를 특정 주기별로 받아 데이터를 수집
                </ListItem>
                <ListItem>
                  Dashboard 에 각 장치에 위치 및 데시벨 정표표기
                </ListItem>
                <ListItem>정보 표기는 GoogleMap 사용</ListItem>
                <ListItem>코드 및 화면 관리용 관리자 화면 추가 개발</ListItem>
              </UnorderedList>
              <JAVA />
              <JavaScript />
              <SPRING />
              <MYSQL />
              <AMChart />
            </Container>
          </Layout>
        </Section>
        <Section delay={0.2}>
          <Layout>
            <Container>
              <Title>
                A사 CRM <Tag>2016</Tag>
              </Title>
              <P>A사 CRM 구축 및 재고관리</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>
                  MS사의 구)Dynamics CRM 현)Dynmic 365 를 이용한 CRM 구축
                </ListItem>
                <ListItem>CRM 관련 MCP license 2종 취득</ListItem>
                <ListItem>품목 마스터 CRM 마이그레이션</ListItem>
              </UnorderedList>
              <DynamicCRM />
            </Container>
          </Layout>
        </Section>
        <Section delay={0.3}>
          <Layout>
            <Container>
              <Title>
                B사 G사이트 <Tag>2017-2018</Tag>
              </Title>
              <P>B사 G사이트 운영</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>사이트 운영 및 추가 요건 사항 개발</ListItem>
                <ListItem>관리자 사이트 재 개발</ListItem>
              </UnorderedList>
              <DOTNET />
              <MSSQL />
              <JavaScript />
              <IIS />
            </Container>
          </Layout>
        </Section>
        <Section delay={0.4}>
          <Layout>
            <Container>
              <Title>
                G사 <Tag>2017</Tag>
              </Title>
              <P>G 병원 운영 및 운영자 모듈 개발</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>병원 사이트 운영</ListItem>
                <ListItem>관리자 모듈 개발 이미지 연동</ListItem>
              </UnorderedList>
              <ASP />
              <MSSQL />
              <JavaScript />
              <IIS />
            </Container>
          </Layout>
        </Section>
        <Section delay={0.5}>
          <Layout>
            <Container>
              <Title>
                K사 <Tag>2018</Tag>
              </Title>
              <P>K사 인사 회계 사이트 운영</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>사이트 운영</ListItem>
              </UnorderedList>
              <JSP />
              <CYBASE />
              <JavaScript />
              <GAUS />
            </Container>
          </Layout>
        </Section>
        <Section delay={0.6}>
          <Layout>
            <Container>
              <Title>
                N사 <Tag>2018</Tag>
              </Title>
              <P>Data 분석 모듈 개발</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>GA 기반 분석 모듈 개발</ListItem>
                <ListItem>법인 별 마이그레이션 모듈 개발</ListItem>
                <ListItem>DevExpress 를 이용한 Dashboard 개발</ListItem>
                <ListItem>Fake Mail 방지 모듈 개발</ListItem>
              </UnorderedList>
              <DOTNET />
              <MSSQL />
              <DevExpress />
              <AWS />
              <TOS />
            </Container>
          </Layout>
        </Section>
        <Section delay={0.7}>
          <Layout>
            <Container>
              <Title>
                D사 <Tag>2018</Tag>
              </Title>
              <P>차량 배치 및 정산 모듈 개발</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>
                  정산, 라이더관리, 실시간 지도 매핑, 배차 관리
                </ListItem>
                <ListItem>가맹점 이용 POS 프로그램</ListItem>
                <ListItem>포인트 관리</ListItem>
              </UnorderedList>
              <SPRING />
              <MariaDB />
              <Tomcat />
              <XPlatform />
            </Container>
          </Layout>
        </Section>
        <Section delay={0.8}>
          <Layout>
            <Container>
              <Title>
                P사 <Tag>2019</Tag>
              </Title>
              <P>P사 R 사이트 개발</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>매출 분석 사이트 개발</ListItem>
                <ListItem>각 부서별 데이터 Summary ( DI )</ListItem>
                <ListItem>통합 및 부서별 Chart, Data Grid 제공</ListItem>
                <ListItem>정기적 데이터 수집을 위한 DI module 사용</ListItem>
              </UnorderedList>
              <JSP />
              <Oracle />
              <WebLogic />
              <MyBuilder />
              <ODI />
            </Container>
          </Layout>
        </Section>
        <Section delay={0.9}>
          <Layout>
            <Container>
              <Title>
                P사 <Tag>2019~</Tag>
              </Title>
              <P>P사 M사이트 운영</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>M사이트 매출 분석 사이트 운영</ListItem>
                <ListItem>각 기준별 분석 장표 제공</ListItem>
              </UnorderedList>
              <JAVA />
              <Oracle />
              <Tomcat />
              <STURTS />
            </Container>
          </Layout>
        </Section>
        <Section delay={1.0}>
          <Layout>
            <Container>
              <Title>
                P사 <Tag>2019~</Tag>
              </Title>
              <P>P사 P사이트 운영</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>P사이트 손익 분석 운영</ListItem>
              </UnorderedList>
              <JSP />
              <Oracle />
              <WebLogic />
              <MyBuilder />
              <Essbase />
              <ODI />
            </Container>
          </Layout>
        </Section>
        <Section delay={1.1}>
          <Layout>
            <Container>
              <Title>
                P사 <Tag>2019</Tag>
              </Title>
              <P>P사 E사이트 개발</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>품목 관련 화면 개발</ListItem>
              </UnorderedList>
              <SPRING />
              <TiberoDB />
              <Tomcat />
              <NexaCro />
            </Container>
          </Layout>
        </Section>
        <Section delay={1.2}>
          <Layout>
            <Container>
              <Title>
                P사 <Tag>2020</Tag>
              </Title>
              <P>P사 S사이트 운영지원</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>사이트 운영 지원</ListItem>
                <ListItem>로직, 화면 분석</ListItem>
              </UnorderedList>
              <SPRING />
              <Oracle />
              <Tomcat />
              <KETTLE />
            </Container>
          </Layout>
        </Section>
        <Section delay={1.2}>
          <Layout>
            <Container>
              <Title>
                P사 <Tag>2021</Tag>
              </Title>
              <P>P사 C사이트 리뉴얼</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>손익 분석 모듈 개발</ListItem>
              </UnorderedList>
              <JSP />
              <Oracle />
              <WebLogic />
              <Essbase />
            </Container>
          </Layout>
        </Section>
        <Section delay={1.2}>
          <Layout>
            <Container>
              <Title>
                E사 <Tag>2022</Tag>
              </Title>
              <P>E사 솔루션 분석</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>E사 솔루션 분석</ListItem>
                <ListItem>암호화 모듈 분리</ListItem>
                <ListItem>계층별 모듈 분리</ListItem>
                <ListItem>주입 모듈 분석</ListItem>
              </UnorderedList>
              <SPRING />
              <Tomcat />
              <JavaScript />
              <WEBIX />
              <LoDash />
              <SockJs />
              <GO />
              <FileSaver />
              <DhxGrid />
            </Container>
          </Layout>
        </Section>
        <Section delay={1.3}>
          <Layout>
            <Container>
              <Title>
                P사 <Tag>2021</Tag>
              </Title>
              <P>U사이트 API 호출 개발</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>API 호출 개발</ListItem>
                <ListItem>알수없는 프레임워크로 소스 트래킹</ListItem>
                <ListItem>메소드 임의 변경 불가 하여 우회하여 개발</ListItem>
              </UnorderedList>
              <SPRING />
              <Tomcat />
              <JavaScript />
              <MYSQL />
            </Container>
          </Layout>
        </Section>
        <Section delay={1.4}>
          <Layout>
            <Container>
              <Title>P사 </Title>
              <P>
                P사이트 손익 분석 리뉴얼<Tag>2022</Tag>
              </P>
              <UnorderedList ml={4} my={4}>
                <ListItem>비용 처리 모듈 개발</ListItem>
                <ListItem>관련 화면 개발</ListItem>
              </UnorderedList>
              <JSP />
              <Oracle />
              <ODI />
              <MyBuilder />
            </Container>
          </Layout>
        </Section>
        <Section delay={1.5}>
          <Layout>
            <Container>
              <Title>P사 </Title>
              <P>
                P사이트 Planning 개발<Tag>2023</Tag>
              </P>
              <UnorderedList ml={4} my={4}>
                <ListItem>매출 생성 모듈</ListItem>
                <ListItem>사용자 정의 비용 산출</ListItem>
              </UnorderedList>
              <JSP />
              <Oracle />
              <ODI />
              <MyBuilder />
            </Container>
          </Layout>
        </Section>
        <Section delay={1.6}>
          <Layout>
            <Container>
              <Title>
                P사 <Tag>2022</Tag>
              </Title>
              <P>G사이트 분석</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>시점 별 패키지 모듈 분석</ListItem>
                <ListItem>데이터 송수신 모듈 분석</ListItem>
              </UnorderedList>
              <Oracle />
              <JAVA />
            </Container>
          </Layout>
        </Section>
        <Section delay={1.7}>
          <Layout>
            <Container>
              <Title>
                T사 <Tag>2023</Tag>
              </Title>
              <P>D 솔루션 분석</P>
              <UnorderedList ml={4} my={4}>
                <ListItem>Non Coding Solution 분석</ListItem>
              </UnorderedList>
              <SPRINGBOOT />
              <JAVA />
              <WEBIX />
              <UNDERTOW />
              <MOBX />
            </Container>
          </Layout>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
