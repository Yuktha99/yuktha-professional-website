
import {CLogo, CppLogo, CssLogo, DockerLogo, FastAPILogo, FlaskLogo, GitLogo, GoLogo, HtmlLogo, JSLogo, JavaLogo, JenkinsLogo, KubernetesLogo, MongoDBLogo, MySqlLogo, NodeLogo, OracleLogo, PostgreSqlLogo, PostmanLogo, PythonLogo, ReactLogo, RestAPILogo, SassLogo, TSLogo} from '../../images/skills/images'
import {BackendAnimation, DBAnimation, FrontendAnimation, ProgrammingLanguagesAnimation} from '../../images/skills/animations'
export const skillsData = [
  {
    header: 'Programming Languages',
    skills_list:[
      {
        image: CLogo,
        name: 'C'
      },
      {
        image: CppLogo,
        name: 'C++'
      },
      {
        image: JavaLogo,
        name: 'Java'
      },
      {
        image: PythonLogo,
        name: 'Python'
      },
      {
        image: JSLogo,
        name: 'Javascript'
      },
      {
        image: TSLogo,
        name: 'Typescript'
      },
      {
        image: GoLogo,
        name: 'GO'
      }
    ],
    animation_image: ProgrammingLanguagesAnimation
  },
  {
    header: 'Frontend Development',
    skills_list: [
      {
        image: ReactLogo,
        name: 'ReactJS/ React Native'
      },
      {
        image: HtmlLogo,
        name: 'HTML5'
      },
      {
        image: CssLogo,
        name: 'CSS3'
      },
      {
        image: SassLogo,
        name: 'Sass'
      }
      
    ],
    animation_image: FrontendAnimation
  },
  {
    header: 'Backend Development',
    skills_list:[
      {
        image: FlaskLogo,
        name: 'Python Flask'
      },
      {
        image: FastAPILogo,
        name: 'Python FastAPI'
      },
      {
        image: NodeLogo,
        name: 'Node JS'
      },
      {
        image: RestAPILogo,
        name: 'Rest APIs'
      },
      {
        image: GoLogo,
        name: 'GO'
      },
      {
        image: PostmanLogo,
        name: 'Postman'
      }
    ],
    animation_image: BackendAnimation
  },
  {
    header: 'DataBases',
    skills_list:[
      {
        image: MySqlLogo,
        name: 'MySQL'
      },
      {
        image: PostgreSqlLogo,
        name: 'PostgreSQL'
      },
      {
        image: OracleLogo,
        name: 'Oracle'
      },
      {
        image: MongoDBLogo,
        name: 'MongoDB'
      }
    ],
    animation_image: DBAnimation
  },
  {
    header: 'DevOps (CI/CD)',
    skills_list:[
      {
        image: DockerLogo,
        name: 'Docker'
      },
      {
        image: KubernetesLogo,
        name: 'Kubernetes'
      },
      {
        image: JenkinsLogo,
        name: 'Jenkins'
      },
      {
        image: GitLogo,
        name: 'Git'
      }
    ]
  }
]