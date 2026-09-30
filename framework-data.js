// Spring Framework 知识树。修改 completed 即可控制绿色；ID 创建后请保持不变。
window.LEARNING_MAP_BRANCHES.framework = [
  {
    "id": "0",
    "title": "Core Technologies",
    "description": "Spring 的核心能力，包括容器、依赖注入、事件、类型转换与切面。",
    "rank": "S",
    "completed": false,
    "children": [
      {
        "id": "0-0",
        "title": "IoC Container",
        "description": "负责创建和管理对象，并为对象装配所需依赖的容器。",
        "rank": "S",
        "completed": false,
        "children": [
          {
            "id": "0-0-0",
            "title": "IoC / DI 基础",
            "description": "理解对象的创建与依赖关系如何交由容器统一管理。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-0-0-0",
                "title": "Inversion of Control",
                "description": "控制反转：把对象创建与组装的控制权交给容器。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-0-1",
                "title": "Dependency Injection",
                "description": "依赖注入：由外部提供对象所需的协作对象，而非自行创建。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-0-2",
                "title": "Constructor Injection",
                "description": "通过构造方法传入依赖，便于明确对象的必要条件。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-0-3",
                "title": "Setter Injection",
                "description": "通过设置方法注入依赖，可用于可选或可调整的属性。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-0-4",
                "title": "Field Injection",
                "description": "直接向字段注入依赖，通常通过注解声明注入点。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "0-0-1",
            "title": "BeanFactory",
            "description": "Spring 对象容器的基础接口，提供按名称或类型获取 Bean 的能力。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-0-1-0",
                "title": "BeanFactory",
                "description": "Spring 对象容器的基础接口，提供按名称或类型获取 Bean 的能力。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-1-1",
                "title": "ListableBeanFactory",
                "description": "扩展基础容器接口，支持列举和按类型查询多个 Bean。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-1-2",
                "title": "ConfigurableBeanFactory",
                "description": "提供配置 Bean 工厂的接口，如作用域、类加载器和后处理器。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-1-3",
                "title": "DefaultListableBeanFactory",
                "description": "常用的 Bean 工厂实现，负责定义注册、依赖解析与对象获取。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "0-0-2",
            "title": "ApplicationContext",
            "description": "应用上下文，在 Bean 管理基础上增加事件、资源和国际化等功能。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-0-2-0",
                "title": "ApplicationContext",
                "description": "应用上下文，在 Bean 管理基础上增加事件、资源和国际化等功能。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-2-1",
                "title": "ConfigurableApplicationContext",
                "description": "提供刷新、关闭及配置应用上下文的操作接口。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-2-2",
                "title": "AnnotationConfigApplicationContext",
                "description": "通过 Java 配置类和注解构建的独立应用上下文。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-2-3",
                "title": "ApplicationContext vs BeanFactory",
                "description": "比较基础 Bean 容器与功能更完整的应用上下文。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "0-0-3",
            "title": "BeanDefinition",
            "description": "描述一个 Bean 如何创建的元数据，如类型、作用域和依赖配置。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-0-3-0",
                "title": "BeanDefinition",
                "description": "描述一个 Bean 如何创建的元数据，如类型、作用域和依赖配置。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-3-1",
                "title": "BeanDefinitionRegistry",
                "description": "注册和管理 Bean 定义的接口。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-3-2",
                "title": "BeanDefinitionReader",
                "description": "读取配置来源，并将其中的 Bean 定义交给容器注册。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-3-3",
                "title": "BeanDefinitionHolder",
                "description": "将 Bean 定义与其名称、别名封装在一起。",
                "rank": "B",
                "completed": false
              },
              {
                "id": "0-0-3-4",
                "title": "BeanDefinition 注册流程",
                "description": "把配置解析成 Bean 定义，再登记到容器中的过程。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "0-0-4",
            "title": "Bean 创建流程",
            "description": "从获取 Bean 到实例化、依赖注入和初始化的完整过程。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-0-4-0",
                "title": "getBean()",
                "description": "向容器请求一个 Bean，必要时触发它的创建。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-4-1",
                "title": "doGetBean()",
                "description": "获取 Bean 的内部流程，协调缓存、作用域和依赖创建。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-4-2",
                "title": "createBean()",
                "description": "创建 Bean 的内部入口，准备类型信息并处理实例化前的扩展。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-4-3",
                "title": "doCreateBean()",
                "description": "执行常规 Bean 创建流程，完成实例化、属性填充与初始化。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-4-4",
                "title": "createBeanInstance()",
                "description": "通过构造方法、工厂方法等方式创建 Bean 实例。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-4-5",
                "title": "populateBean()",
                "description": "为已创建的 Bean 填充属性并装配依赖。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-4-6",
                "title": "initializeBean()",
                "description": "执行相关回调、初始化方法和初始化前后的后处理。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-4-7",
                "title": "registerDisposableBeanIfNecessary()",
                "description": "在需要时登记 Bean 的销毁回调，供容器关闭等场景使用。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "0-0-5",
            "title": "Bean 生命周期",
            "description": "Bean 从创建、依赖注入、初始化到销毁的各个阶段。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-0-5-0",
                "title": "实例化",
                "description": "调用构造方法或工厂方法，创建对象实例。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-5-1",
                "title": "属性填充 / 依赖注入",
                "description": "把配置值和依赖对象设置到已经创建的 Bean 中。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-5-2",
                "title": "Aware 回调",
                "description": "通过专用接口让 Bean 获取名称、容器等运行环境信息。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-5-3",
                "title": "BeanPostProcessor Before",
                "description": "在 Bean 的初始化方法执行前进行扩展处理。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-5-4",
                "title": "@PostConstruct",
                "description": "标记依赖注入后执行的初始化方法。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-5-5",
                "title": "InitializingBean",
                "description": "通过 afterPropertiesSet 方法定义 Bean 的初始化逻辑。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-5-6",
                "title": "init-method",
                "description": "在 Bean 配置中指定自定义初始化方法。",
                "rank": "B",
                "completed": false
              },
              {
                "id": "0-0-5-7",
                "title": "BeanPostProcessor After",
                "description": "在初始化方法执行后处理 Bean，必要时返回包装或代理对象。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-5-8",
                "title": "@PreDestroy",
                "description": "标记由容器管理的 Bean 销毁前执行的方法。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-5-9",
                "title": "DisposableBean / destroy-method",
                "description": "通过接口或配置指定 Bean 的资源清理方法。",
                "rank": "B",
                "completed": false
              }
            ]
          },
          {
            "id": "0-0-6",
            "title": "Dependency Resolution",
            "description": "根据类型、名称和限定条件确定应注入哪个 Bean。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-0-6-0",
                "title": "byType",
                "description": "根据所需类型匹配容器中的依赖对象。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-6-1",
                "title": "byName",
                "description": "根据名称匹配容器中的依赖对象。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-6-2",
                "title": "@Autowired",
                "description": "声明需要由 Spring 自动解析和注入的依赖。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-6-3",
                "title": "@Qualifier",
                "description": "为依赖注入添加限定条件，缩小候选 Bean 范围。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-6-4",
                "title": "@Primary",
                "description": "有多个同类型候选时，优先选择标记了该注解的 Bean。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-6-5",
                "title": "@Resource",
                "description": "声明资源注入，常用于按名称指定需要的依赖。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-6-6",
                "title": "Optional Dependency",
                "description": "允许依赖不存在，适用于可选组件或条件化功能。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-6-7",
                "title": "ObjectProvider",
                "description": "按需获取 Bean，支持延迟解析和处理可选或多个候选对象。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-6-8",
                "title": "Collection / Map Injection",
                "description": "一次注入同类型的多个 Bean，组成集合或以名称为键的映射。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "0-0-7",
            "title": "Bean Scope",
            "description": "规定 Bean 的实例数量、共享范围和生命周期边界。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-0-7-0",
                "title": "singleton",
                "description": "在同一容器中，一个 Bean 定义通常共享一个实例。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-7-1",
                "title": "prototype",
                "description": "每次向容器请求该 Bean 时创建新实例。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-7-2",
                "title": "request",
                "description": "在同一个 HTTP 请求内共享一个 Bean 实例。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-7-3",
                "title": "session",
                "description": "在同一个 HTTP 会话内共享一个 Bean 实例。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-7-4",
                "title": "application",
                "description": "在同一个 ServletContext 范围内共享一个 Bean 实例。",
                "rank": "B",
                "completed": false
              },
              {
                "id": "0-0-7-5",
                "title": "websocket",
                "description": "在同一个 WebSocket 会话内共享一个 Bean 实例。",
                "rank": "B",
                "completed": false
              },
              {
                "id": "0-0-7-6",
                "title": "Custom Scope",
                "description": "按业务需求定义 Bean 的共享范围与销毁时机。",
                "rank": "B",
                "completed": false
              }
            ]
          },
          {
            "id": "0-0-8",
            "title": "循环依赖",
            "description": "多个对象相互依赖，形成闭环，可能导致容器无法完成创建。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-0-8-0",
                "title": "Constructor Circular Dependency",
                "description": "构造方法之间形成依赖闭环，通常无法直接完成实例化。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-8-1",
                "title": "Setter Circular Dependency",
                "description": "通过属性注入形成循环，部分单例场景可借助提前引用处理。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-8-2",
                "title": "Singleton Early Reference",
                "description": "对象尚未完全初始化时提供的单例引用，用于协调部分循环依赖。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-8-3",
                "title": "Singleton Cache",
                "description": "保存已经创建完成的单例 Bean。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-8-4",
                "title": "Early Singleton Cache",
                "description": "保存已提前暴露、尚未完成全部初始化的单例引用。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-8-5",
                "title": "Singleton Factory Cache",
                "description": "保存生成提前引用的工厂，必要时提供原始或代理引用。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-8-6",
                "title": "AOP 与循环依赖",
                "description": "处理循环依赖时，协调提前暴露的对象与最终代理对象的一致性。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "0-0-9",
            "title": "Bean 配置",
            "description": "通过注解或配置声明对象及其依赖、作用域和生命周期。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-0-9-0",
                "title": "@Component",
                "description": "把一个类标记为可由组件扫描发现的 Spring Bean。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-9-1",
                "title": "@Service",
                "description": "标记业务服务层组件，是具有业务语义的组件注解。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-9-2",
                "title": "@Repository",
                "description": "标记数据访问层组件，并可配合异常转换机制使用。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-9-3",
                "title": "@Controller",
                "description": "标记处理 Web 请求的控制器组件。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-9-4",
                "title": "@Configuration",
                "description": "标记用于声明 Bean 和其他容器配置的配置类。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-9-5",
                "title": "@Bean",
                "description": "将方法的返回对象注册为容器管理的 Bean。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-9-6",
                "title": "@ComponentScan",
                "description": "指定组件扫描范围，自动发现并注册带组件注解的类。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-9-7",
                "title": "@Import",
                "description": "引入配置类或相关注册扩展，组合不同配置模块。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-9-8",
                "title": "@Lazy",
                "description": "延迟 Bean 的初始化，或在注入点使用延迟解析的代理。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-9-9",
                "title": "@DependsOn",
                "description": "声明一个 Bean 应在其他指定 Bean 初始化后再初始化。",
                "rank": "B",
                "completed": false
              },
              {
                "id": "0-0-9-10",
                "title": "@Profile",
                "description": "根据激活的环境分组决定是否启用某个 Bean 或配置。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "0-0-10",
            "title": "Java Configuration",
            "description": "使用 Java 类和方法声明容器配置，替代部分 XML 配置。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-0-10-0",
                "title": "@Configuration",
                "description": "标记用于声明 Bean 和其他容器配置的配置类。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-10-1",
                "title": "@Bean",
                "description": "将方法的返回对象注册为容器管理的 Bean。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-10-2",
                "title": "Full / Lite Configuration",
                "description": "比较配置类是否增强，以及 Bean 方法相互调用时的行为差异。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-10-3",
                "title": "@Import",
                "description": "引入配置类或相关注册扩展，组合不同配置模块。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-10-4",
                "title": "Configuration Class Processing",
                "description": "解析配置类、导入关系和 Bean 方法，生成对应的 Bean 定义。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "0-0-11",
            "title": "Environment / Properties",
            "description": "统一访问运行环境、配置属性和激活的环境分组。",
            "rank": "T",
            "completed": false,
            "children": [
              {
                "id": "0-0-11-0",
                "title": "Environment",
                "description": "提供配置属性查询和环境分组管理的统一接口。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-11-1",
                "title": "PropertySource",
                "description": "代表一个配置值来源，例如系统属性、环境变量或配置文件。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-11-2",
                "title": "@PropertySource",
                "description": "将指定的属性资源加入应用环境的配置来源。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-11-3",
                "title": "@Value",
                "description": "把配置属性或表达式计算结果注入字段、参数等位置。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-11-4",
                "title": "Profiles",
                "description": "按开发、测试等环境划分可选择启用的配置组。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "0-0-12",
            "title": "Container Extension Points",
            "description": "在容器启动、Bean 定义处理或对象创建阶段插入自定义逻辑。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-0-12-0",
                "title": "BeanPostProcessor",
                "description": "在 Bean 初始化前后扩展处理，可包装对象或创建代理。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-12-1",
                "title": "InstantiationAwareBeanPostProcessor",
                "description": "在实例化及属性填充等阶段参与 Bean 创建过程。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-12-2",
                "title": "SmartInstantiationAwareBeanPostProcessor",
                "description": "提供类型预测、构造方法选择和提前引用等高级扩展。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-12-3",
                "title": "BeanFactoryPostProcessor",
                "description": "在普通 Bean 创建前调整容器配置和 Bean 定义。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-12-4",
                "title": "BeanDefinitionRegistryPostProcessor",
                "description": "在常规工厂后处理之前增加或调整 Bean 定义。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-12-5",
                "title": "FactoryBean",
                "description": "通过专门的工厂 Bean 创建对象，适合复杂的实例化逻辑。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-12-6",
                "title": "ImportSelector",
                "description": "根据配置元数据选择要导入的配置类。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-12-7",
                "title": "DeferredImportSelector",
                "description": "延后执行导入选择，以便在其他配置处理后决定导入内容。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-12-8",
                "title": "ImportBeanDefinitionRegistrar",
                "description": "在导入配置时以编程方式注册 Bean 定义。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "0-0-13",
            "title": "Aware Interfaces",
            "description": "让 Bean 主动接收特定容器服务或运行环境信息的一组接口。",
            "rank": "T",
            "completed": false,
            "children": [
              {
                "id": "0-0-13-0",
                "title": "BeanNameAware",
                "description": "让 Bean 获取自己在容器中的名称。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-13-1",
                "title": "BeanFactoryAware",
                "description": "让 Bean 获取所属的 BeanFactory。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-13-2",
                "title": "ApplicationContextAware",
                "description": "让 Bean 获取所属的应用上下文。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-0-13-3",
                "title": "EnvironmentAware",
                "description": "让 Bean 获取当前应用的环境与配置属性入口。",
                "rank": "B",
                "completed": false
              }
            ]
          },
          {
            "id": "0-0-14",
            "title": "IoC Container 源码主线",
            "description": "沿容器刷新流程理解配置解析、扩展执行与单例创建。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-0-14-0",
                "title": "ApplicationContext.refresh()",
                "description": "启动或刷新应用上下文，组织容器初始化的主要步骤。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-14-1",
                "title": "prepareBeanFactory()",
                "description": "配置 Bean 工厂所需的基础设施、解析器和环境依赖。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-14-2",
                "title": "invokeBeanFactoryPostProcessors()",
                "description": "执行对 Bean 工厂和 Bean 定义进行处理的扩展。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-14-3",
                "title": "registerBeanPostProcessors()",
                "description": "注册在 Bean 创建与初始化过程中参与处理的后处理器。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-14-4",
                "title": "finishBeanFactoryInitialization()",
                "description": "完成工厂初始化，并创建需要提前初始化的单例 Bean。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-0-14-5",
                "title": "finishRefresh()",
                "description": "完成刷新收尾，启动生命周期组件并发布刷新完成事件。",
                "rank": "T",
                "completed": false
              }
            ]
          }
        ]
      },
      {
        "id": "0-1",
        "title": "Application Events",
        "description": "通过事件发布与监听，让应用组件之间降低直接耦合。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "0-1-0",
            "title": "ApplicationEvent",
            "description": "Spring 应用事件的基础类型，用于表达应用中发生的事情。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-1-1",
            "title": "ApplicationEventPublisher",
            "description": "向应用上下文发布事件的接口。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-1-2",
            "title": "ApplicationListener",
            "description": "接收并处理指定类型应用事件的监听接口。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-1-3",
            "title": "@EventListener",
            "description": "把普通方法声明为应用事件监听方法。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-1-4",
            "title": "Generic Events",
            "description": "利用泛型信息区分和匹配应用事件的具体类型。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-1-5",
            "title": "Event Ordering",
            "description": "控制多个事件监听器的执行顺序。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-1-6",
            "title": "Async Events",
            "description": "在异步执行环境中处理事件，减少对发布线程的阻塞。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-1-7",
            "title": "Event Multicaster",
            "description": "将一个事件分发给匹配的监听器。",
            "rank": "B",
            "completed": false
          }
        ]
      },
      {
        "id": "0-2",
        "title": "Resources",
        "description": "统一访问类路径、文件系统和网络等来源的资源。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "0-2-0",
            "title": "Resource",
            "description": "抽象不同来源的资源，提供读取内容和查询元数据的统一方式。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-2-1",
            "title": "ResourceLoader",
            "description": "根据资源地址加载对应的 Resource。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-2-2",
            "title": "ResourcePatternResolver",
            "description": "支持通配符等路径模式，一次查找多个资源。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-2-3",
            "title": "ClassPathResource",
            "description": "表示应用类路径中的资源文件。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-2-4",
            "title": "FileSystemResource",
            "description": "表示文件系统中的文件或目录资源。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-2-5",
            "title": "UrlResource",
            "description": "通过 URL 表示和访问资源。",
            "rank": "B",
            "completed": false
          }
        ]
      },
      {
        "id": "0-3",
        "title": "Internationalization",
        "description": "根据用户语言和地区返回相应的文本与格式。",
        "rank": "C",
        "completed": false,
        "children": [
          {
            "id": "0-3-0",
            "title": "MessageSource",
            "description": "按消息编码和语言地区查找本地化文本。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-3-1",
            "title": "LocaleResolver",
            "description": "在 Web 请求中确定当前使用的语言和地区。",
            "rank": "C",
            "completed": false
          },
          {
            "id": "0-3-2",
            "title": "ResourceBundleMessageSource",
            "description": "从资源包中读取不同语言的消息文本。",
            "rank": "C",
            "completed": false
          }
        ]
      },
      {
        "id": "0-4",
        "title": "Validation / Data Binding",
        "description": "把外部数据绑定到对象，并检查它是否满足约束。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "0-4-0",
            "title": "Validator",
            "description": "Spring 的校验接口，用于检查对象并记录错误。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-4-1",
            "title": "Errors / BindingResult",
            "description": "保存字段绑定与数据校验过程中产生的错误信息。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-4-2",
            "title": "DataBinder",
            "description": "将外部属性值绑定到对象，并支持类型转换和校验。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-4-3",
            "title": "BeanWrapper",
            "description": "统一访问和修改 JavaBean 属性，包括嵌套属性。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-4-4",
            "title": "Bean Validation",
            "description": "通过标准校验注解和校验器检查对象字段约束。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-4-5",
            "title": "@Valid",
            "description": "触发相关校验集成，并声明需要级联校验的对象。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-4-6",
            "title": "@Validated",
            "description": "Spring 的校验注解，支持分组校验等场景。",
            "rank": "T",
            "completed": false
          }
        ]
      },
      {
        "id": "0-5",
        "title": "Type Conversion",
        "description": "在字符串、数字和业务对象等类型之间转换数据。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "0-5-0",
            "title": "Converter",
            "description": "定义从一种类型到另一种类型的转换规则。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-5-1",
            "title": "ConverterFactory",
            "description": "为一组相关目标类型提供转换器。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-5-2",
            "title": "GenericConverter",
            "description": "支持多种类型组合，并可使用更丰富的类型描述信息。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-5-3",
            "title": "ConversionService",
            "description": "统一查找和调用已注册的类型转换器。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-5-4",
            "title": "Formatter",
            "description": "按语言地区解析和格式化日期、数字等文本。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-5-5",
            "title": "PropertyEditor",
            "description": "通过 JavaBean 属性编辑器机制完成属性值转换。",
            "rank": "C",
            "completed": false
          }
        ]
      },
      {
        "id": "0-6",
        "title": "Spring Expression Language（SpEL）",
        "description": "在运行时读取属性、调用方法和计算表达式的语言。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "0-6-0",
            "title": "ExpressionParser",
            "description": "把表达式文本解析成可执行的表达式对象。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-6-1",
            "title": "EvaluationContext",
            "description": "提供表达式执行所需的变量、类型解析和访问规则。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-6-2",
            "title": "Property / Method Access",
            "description": "在表达式中读取对象属性或调用方法。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "0-6-3",
            "title": "Collection Selection / Projection",
            "description": "在表达式中筛选集合元素，或将元素映射为新的结果。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-6-4",
            "title": "Bean References",
            "description": "在表达式中引用 Spring 容器管理的 Bean。",
            "rank": "T",
            "completed": false
          }
        ]
      },
      {
        "id": "0-7",
        "title": "Spring AOP",
        "description": "利用代理为方法增加事务、日志等横切功能。",
        "rank": "S",
        "completed": false,
        "children": [
          {
            "id": "0-7-0",
            "title": "AOP 核心概念",
            "description": "理解切面、切点、通知、目标对象和代理之间的关系。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-7-0-0",
                "title": "Aspect",
                "description": "将某类横切功能的切点与通知组织在一起的切面。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-0-1",
                "title": "Join Point",
                "description": "可以插入增强逻辑的执行位置；Spring AOP 主要围绕方法执行。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-0-2",
                "title": "Pointcut",
                "description": "定义哪些方法执行位置需要应用增强逻辑。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-0-3",
                "title": "Advice",
                "description": "在匹配位置执行的增强逻辑，例如记录日志或开启事务。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-0-4",
                "title": "Advisor",
                "description": "将切点与通知组合起来，供代理判断和执行增强。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-0-5",
                "title": "Target",
                "description": "代理背后真正执行业务逻辑的目标对象。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-0-6",
                "title": "Proxy",
                "description": "包装目标对象，在方法调用前后加入额外处理。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "0-7-1",
            "title": "Advice Types",
            "description": "根据执行时机区分前置、后置、异常和环绕等通知。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-7-1-0",
                "title": "Before",
                "description": "在目标方法执行前运行的通知。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-1-1",
                "title": "After",
                "description": "在目标方法结束后运行的通知，正常返回或抛出异常都适用。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-1-2",
                "title": "After Returning",
                "description": "仅在目标方法正常返回后运行的通知。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-7-1-3",
                "title": "After Throwing",
                "description": "在目标方法抛出匹配异常后运行的通知。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-7-1-4",
                "title": "Around",
                "description": "包围方法调用，可控制是否执行目标方法及其返回结果。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "0-7-2",
            "title": "Proxy Mechanism",
            "description": "通过接口代理或子类代理，把增强逻辑接入方法调用。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-7-2-0",
                "title": "JDK Dynamic Proxy",
                "description": "基于接口生成代理对象，拦截通过接口发起的方法调用。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-2-1",
                "title": "CGLIB Proxy",
                "description": "通过生成目标类的子类实现代理，受继承和方法可覆盖性限制。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-2-2",
                "title": "Proxy Selection",
                "description": "根据接口、配置等条件选择代理实现方式。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-2-3",
                "title": "Proxy Limitations",
                "description": "了解代理对内部调用、final 方法及可见性等方面的限制。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "0-7-3",
            "title": "AspectJ Annotation Style",
            "description": "使用 AspectJ 注解风格描述切面、切点和通知。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-7-3-0",
                "title": "@Aspect",
                "description": "将一个类声明为切面定义。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-3-1",
                "title": "@Pointcut",
                "description": "为可复用的切点表达式定义名称。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-3-2",
                "title": "@Before",
                "description": "声明目标方法执行前调用的通知。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-3-3",
                "title": "@Around",
                "description": "声明可以包围并控制方法执行的通知。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-3-4",
                "title": "@After",
                "description": "声明目标方法结束后执行的通知，无论正常返回还是异常退出。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-7-3-5",
                "title": "@AfterReturning",
                "description": "声明目标方法正常返回后执行的通知。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "0-7-3-6",
                "title": "@AfterThrowing",
                "description": "声明目标方法抛出匹配异常后执行的通知。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "0-7-4",
            "title": "AOP Infrastructure",
            "description": "支撑代理创建、通知匹配和拦截链执行的底层组件。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-7-4-0",
                "title": "ProxyFactory",
                "description": "以编程方式为目标对象创建 AOP 代理。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-4-1",
                "title": "AdvisedSupport",
                "description": "保存代理所需的目标、接口和增强配置。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-4-2",
                "title": "AopProxy",
                "description": "抽象 AOP 代理的创建方式。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-4-3",
                "title": "MethodInterceptor",
                "description": "拦截一次方法调用，并可继续执行后续拦截链。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-4-4",
                "title": "MethodInvocation",
                "description": "封装方法、参数和调用过程，供拦截器访问及继续执行。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-4-5",
                "title": "Interceptor Chain",
                "description": "按顺序执行多个方法拦截器，最终到达目标方法。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "0-7-5",
            "title": "Auto Proxy Creation",
            "description": "在 Bean 创建期间自动识别匹配增强并生成代理。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "0-7-5-0",
                "title": "AbstractAutoProxyCreator",
                "description": "自动代理创建器的基础实现，在 Bean 生命周期中接入代理逻辑。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-5-1",
                "title": "Advisor Matching",
                "description": "判断哪些增强配置适用于某个类或方法。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "0-7-5-2",
                "title": "Proxy Creation",
                "description": "把目标对象与匹配的增强组合成可调用的代理。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "0-7-6",
            "title": "Self Invocation",
            "description": "对象内部直接调用自身方法，可能绕过代理提供的事务或切面增强。",
            "rank": "S",
            "completed": false
          },
          {
            "id": "0-7-7",
            "title": "AopContext",
            "description": "在开启相应配置时，提供访问当前 AOP 代理的入口。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-7-8",
            "title": "AspectJ Integration",
            "description": "将 Spring 与 AspectJ 织入能力结合，覆盖代理之外的增强场景。",
            "rank": "B",
            "completed": false
          }
        ]
      },
      {
        "id": "0-8",
        "title": "Null Safety",
        "description": "通过类型、注解和工具明确哪些值允许为空，减少空指针问题。",
        "rank": "B",
        "completed": false,
        "children": [
          {
            "id": "0-8-0",
            "title": "@Nullable",
            "description": "标记参数、返回值或字段可以为空。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-8-1",
            "title": "JSpecify",
            "description": "用于表达 Java 空值约束的一组标准化注解。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-8-2",
            "title": "Kotlin Null Safety",
            "description": "利用 Kotlin 的可空类型和编译检查减少空值错误。",
            "rank": "C",
            "completed": false
          }
        ]
      },
      {
        "id": "0-9",
        "title": "Data Buffers / Codecs",
        "description": "管理数据缓冲区，并在字节数据与对象之间进行编解码。",
        "rank": "B",
        "completed": false,
        "children": [
          {
            "id": "0-9-0",
            "title": "DataBuffer",
            "description": "统一表示可读取和写入的数据缓冲区。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-9-1",
            "title": "DataBufferFactory",
            "description": "创建或包装 DataBuffer 的工厂接口。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-9-2",
            "title": "Codec",
            "description": "负责把对象编码为数据，或把数据解码为对象。",
            "rank": "B",
            "completed": false
          }
        ]
      },
      {
        "id": "0-10",
        "title": "Resilience",
        "description": "通过重试和并发控制等方式提高应用应对临时故障的能力。",
        "rank": "B",
        "completed": false,
        "children": [
          {
            "id": "0-10-0",
            "title": "Retry",
            "description": "操作临时失败后按规则重新尝试，需要注意重复执行的影响。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-10-1",
            "title": "Concurrency Limit",
            "description": "限制同时执行的任务数量，避免资源被过度占用。",
            "rank": "B",
            "completed": false
          }
        ]
      },
      {
        "id": "0-11",
        "title": "AOT",
        "description": "在运行前提前分析和生成代码，减少启动时的动态处理。",
        "rank": "B",
        "completed": false,
        "children": [
          {
            "id": "0-11-0",
            "title": "Ahead-of-Time Processing",
            "description": "提前分析应用配置，生成启动所需的代码和元数据。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-11-1",
            "title": "Runtime Hints",
            "description": "声明运行时需要的反射、资源和代理等动态能力。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-11-2",
            "title": "Reflection Hints",
            "description": "声明需要通过反射访问的类型、构造方法或成员。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-11-3",
            "title": "Resource Hints",
            "description": "声明运行时需要读取的资源，供提前处理或原生镜像构建使用。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "0-11-4",
            "title": "Proxy Hints",
            "description": "声明运行时所需的动态代理接口组合。",
            "rank": "B",
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "1",
    "title": "Testing",
    "description": "Spring 提供的单元测试、集成测试与 Web 接口测试支持。",
    "rank": "T",
    "completed": false,
    "children": [
      {
        "id": "1-0",
        "title": "Unit Testing",
        "description": "独立验证一个类或方法的行为，尽量隔离外部依赖。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "1-0-0",
            "title": "Spring Mock Objects",
            "description": "用模拟对象替代部分容器或 Web 环境，便于独立测试。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "1-0-1",
            "title": "Testing Utilities",
            "description": "辅助反射调用、数据准备和结果检查等测试操作的工具。",
            "rank": "B",
            "completed": false
          }
        ]
      },
      {
        "id": "1-1",
        "title": "Integration Testing",
        "description": "验证多个组件与配置在一起时是否按预期工作。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "1-1-0",
            "title": "ApplicationContext Integration",
            "description": "在测试中加载应用上下文，使用真实配置的 Bean。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "1-1-1",
            "title": "Transaction Integration",
            "description": "把数据操作或测试执行纳入 Spring 的事务管理。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "1-1-2",
            "title": "Test Fixture Management",
            "description": "准备、复用和清理测试依赖的对象、数据与环境。",
            "rank": "T",
            "completed": false
          }
        ]
      },
      {
        "id": "1-2",
        "title": "Spring TestContext Framework",
        "description": "统一管理测试上下文、依赖注入、事务和测试生命周期。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "1-2-0",
            "title": "TestContext",
            "description": "保存一次测试所需的上下文信息和应用环境。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "1-2-1",
            "title": "TestContextManager",
            "description": "协调测试生命周期并调用相关测试监听器。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "1-2-2",
            "title": "TestExecutionListener",
            "description": "在测试准备、执行前后等阶段插入自定义处理。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "1-2-3",
            "title": "Context Configuration",
            "description": "声明测试需要加载的配置类、配置文件和上下文结构。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "1-2-4",
            "title": "Context Caching",
            "description": "复用配置相同的测试应用上下文，减少重复初始化。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "1-2-5",
            "title": "@ContextConfiguration",
            "description": "指定测试应用上下文的配置来源。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "1-2-6",
            "title": "@ActiveProfiles",
            "description": "指定测试时激活哪些环境分组。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "1-2-7",
            "title": "@TestPropertySource",
            "description": "为测试添加专用的属性配置来源。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "1-2-8",
            "title": "@DirtiesContext",
            "description": "标记测试已改变上下文状态，使相关缓存上下文失效。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "1-2-9",
            "title": "Transactional Tests",
            "description": "在事务中执行测试，通常在测试结束后回滚数据修改。",
            "rank": "T",
            "completed": false
          }
        ]
      },
      {
        "id": "1-3",
        "title": "JDBC Testing Support",
        "description": "辅助数据库测试中的数据准备、查询与清理。",
        "rank": "B",
        "completed": false,
        "children": [
          {
            "id": "1-3-0",
            "title": "JdbcTestUtils",
            "description": "提供统计记录数、删除数据等 JDBC 测试辅助操作。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "1-3-1",
            "title": "@Sql",
            "description": "在测试指定阶段执行 SQL 脚本或语句。",
            "rank": "T",
            "completed": false
          }
        ]
      },
      {
        "id": "1-4",
        "title": "MockMvc",
        "description": "无需启动真实 HTTP 服务器即可测试 Spring MVC 请求处理。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "1-4-0",
            "title": "Request Builder",
            "description": "构造测试请求，包括路径、参数、请求头和请求体。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "1-4-1",
            "title": "Result Matcher",
            "description": "检查测试响应是否符合预期，例如状态码和返回内容。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "1-4-2",
            "title": "Result Handler",
            "description": "对测试结果进行额外处理，例如打印请求和响应。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "1-4-3",
            "title": "Async Request Testing",
            "description": "验证异步请求的启动、完成和后续分派行为。",
            "rank": "B",
            "completed": false
          }
        ]
      },
      {
        "id": "1-5",
        "title": "WebTestClient",
        "description": "以流式 API 测试 Web 接口，可连接测试环境或真实服务。",
        "rank": "B",
        "completed": false
      },
      {
        "id": "1-6",
        "title": "RestTestClient",
        "description": "面向同步 HTTP 接口的测试客户端，用于发起请求并验证响应。",
        "rank": "T",
        "completed": false
      }
    ]
  },
  {
    "id": "2",
    "title": "Data Access",
    "description": "Spring 对数据库访问、事务管理和持久化技术的支持。",
    "rank": "S",
    "completed": false,
    "children": [
      {
        "id": "2-0",
        "title": "Transaction Management",
        "description": "统一控制一组数据操作的提交与回滚。",
        "rank": "S",
        "completed": false,
        "children": [
          {
            "id": "2-0-0",
            "title": "Transaction Abstraction",
            "description": "用统一接口屏蔽不同事务实现的操作差异。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "2-0-0-0",
                "title": "TransactionManager",
                "description": "Spring 事务管理器体系的公共标记接口。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-0-1",
                "title": "PlatformTransactionManager",
                "description": "管理命令式事务的开启、提交和回滚。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-0-2",
                "title": "ReactiveTransactionManager",
                "description": "在响应式执行流程中管理事务。",
                "rank": "B",
                "completed": false
              },
              {
                "id": "2-0-0-3",
                "title": "TransactionDefinition",
                "description": "描述事务的传播行为、隔离级别、超时和只读等属性。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-0-4",
                "title": "TransactionStatus",
                "description": "表示当前事务的执行状态，并提供回滚标记等操作。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "2-0-1",
            "title": "Declarative Transaction",
            "description": "用注解或配置声明事务规则，由框架执行事务边界控制。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "2-0-1-0",
                "title": "@Transactional",
                "description": "声明方法或类的事务规则，常通过 Spring 代理生效。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-1-1",
                "title": "TransactionInterceptor",
                "description": "在方法调用周围执行事务开启、提交或回滚逻辑。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-1-2",
                "title": "TransactionAttributeSource",
                "description": "读取方法或类上的事务配置元数据。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-1-3",
                "title": "Transaction Advisor",
                "description": "把事务规则与对应的方法拦截逻辑组合起来。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-1-4",
                "title": "AOP Transaction Proxy",
                "description": "通过 AOP 代理在业务方法外层管理事务。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "2-0-2",
            "title": "Transaction Propagation",
            "description": "定义方法被调用时如何加入、创建或挂起事务。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "2-0-2-0",
                "title": "REQUIRED",
                "description": "存在事务就加入，否则创建新事务。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-2-1",
                "title": "REQUIRES_NEW",
                "description": "创建独立的新事务，并在需要时挂起已有事务。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-2-2",
                "title": "NESTED",
                "description": "在已有事务中使用保存点形成嵌套事务，需要底层支持。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-2-3",
                "title": "SUPPORTS",
                "description": "有事务时加入，没有事务时也可以执行。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "2-0-2-4",
                "title": "NOT_SUPPORTED",
                "description": "以非事务方式执行，并在需要时挂起已有事务。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "2-0-2-5",
                "title": "MANDATORY",
                "description": "要求调用时已存在事务，否则报错。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "2-0-2-6",
                "title": "NEVER",
                "description": "要求调用时不存在事务，否则报错。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "2-0-3",
            "title": "Transaction Isolation",
            "description": "控制并发事务之间可以看到哪些数据变化。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "2-0-3-0",
                "title": "DEFAULT",
                "description": "使用底层数据存储所配置的默认隔离级别。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "2-0-3-1",
                "title": "READ_UNCOMMITTED",
                "description": "允许读取其他事务尚未提交的数据，可能出现脏读。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-3-2",
                "title": "READ_COMMITTED",
                "description": "只读取已提交的数据，避免脏读，但可能发生不可重复读。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-3-3",
                "title": "REPEATABLE_READ",
                "description": "防止同一事务内出现不可重复读，具体并发行为取决于数据库实现。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-3-4",
                "title": "SERIALIZABLE",
                "description": "最严格的常用隔离级别，使并发事务呈现可串行执行的效果。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "2-0-4",
            "title": "Rollback Rules",
            "description": "指定哪些异常应触发回滚，哪些异常允许事务提交。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "2-0-4-0",
                "title": "RuntimeException",
                "description": "运行时异常，Spring 默认事务规则通常会对此类异常回滚。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-4-1",
                "title": "Checked Exception",
                "description": "需要声明或捕获的受检异常，是否回滚取决于事务规则。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-4-2",
                "title": "rollbackFor",
                "description": "指定应触发事务回滚的异常类型。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-4-3",
                "title": "noRollbackFor",
                "description": "指定不应触发事务回滚的异常类型。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "2-0-5",
            "title": "Transaction Synchronization",
            "description": "让资源处理或回调与事务提交、回滚等阶段保持一致。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "2-0-5-0",
                "title": "TransactionSynchronizationManager",
                "description": "协调事务相关资源和同步回调的上下文管理。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-5-1",
                "title": "Resource Binding",
                "description": "把数据库连接等资源关联到当前事务执行上下文。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-5-2",
                "title": "TransactionSynchronization",
                "description": "在事务提交前后及完成时执行回调的接口。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "2-0-6",
            "title": "Programmatic Transaction",
            "description": "在代码中显式定义事务边界并控制提交或回滚。",
            "rank": "T",
            "completed": false,
            "children": [
              {
                "id": "2-0-6-0",
                "title": "TransactionTemplate",
                "description": "用回调方式简化命令式事务管理代码。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "2-0-6-1",
                "title": "TransactionalOperator",
                "description": "将事务边界应用到响应式数据处理流程。",
                "rank": "B",
                "completed": false
              }
            ]
          },
          {
            "id": "2-0-7",
            "title": "Transaction-bound Events",
            "description": "将事件处理绑定到事务提交、回滚或完成阶段。",
            "rank": "T",
            "completed": false,
            "children": [
              {
                "id": "2-0-7-0",
                "title": "@TransactionalEventListener",
                "description": "在指定事务阶段处理事件，例如事务成功提交后。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "2-0-8",
            "title": "Transaction Failure Scenarios",
            "description": "识别代理、异常和线程边界等因素造成的事务失效问题。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "2-0-8-0",
                "title": "Self Invocation",
                "description": "对象内部直接调用自身方法，可能绕过代理提供的事务或切面增强。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-8-1",
                "title": "非代理方法调用",
                "description": "绕过 Spring 代理调用目标对象，可能使声明式事务不生效。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-8-2",
                "title": "Exception 被捕获",
                "description": "异常被业务代码吞掉后，事务拦截器可能无法按异常触发回滚。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-8-3",
                "title": "Rollback Rule 错误",
                "description": "回滚配置与实际异常不匹配，导致事务结果不符合预期。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-8-4",
                "title": "Thread Boundary",
                "description": "命令式事务通常绑定线程，切换线程时不会自动传递事务。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-8-5",
                "title": "@Async + Transaction",
                "description": "异步任务与调用方通常处在不同线程，需要分别考虑事务边界。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "2-0-8-6",
                "title": "Long Transaction",
                "description": "事务持续时间过长，可能占用连接、锁和其他数据库资源。",
                "rank": "S",
                "completed": false
              }
            ]
          }
        ]
      },
      {
        "id": "2-1",
        "title": "DAO Support",
        "description": "为数据访问层提供统一异常与通用基础支持。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "2-1-0",
            "title": "DataAccessException",
            "description": "Spring 统一的数据访问异常体系，屏蔽具体存储技术的差异。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "2-1-1",
            "title": "Exception Translation",
            "description": "把底层数据库或持久化异常转换为统一的数据访问异常。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "2-1-2",
            "title": "@Repository",
            "description": "标记数据访问层组件，并可配合异常转换机制使用。",
            "rank": "T",
            "completed": false
          }
        ]
      },
      {
        "id": "2-2",
        "title": "JDBC",
        "description": "Java 访问关系型数据库的标准接口。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "2-2-0",
            "title": "JdbcTemplate",
            "description": "封装 JDBC 资源管理与异常处理，简化 SQL 执行。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "2-2-1",
            "title": "NamedParameterJdbcTemplate",
            "description": "支持使用参数名称绑定 SQL 参数的 JDBC 模板。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "2-2-2",
            "title": "JdbcClient",
            "description": "以流式调用方式简化常用 JDBC 查询与更新操作。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "2-2-3",
            "title": "RowMapper",
            "description": "把查询结果中的一行转换成一个对象。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "2-2-4",
            "title": "ResultSetExtractor",
            "description": "读取整个查询结果集并转换成所需的数据结构。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "2-2-5",
            "title": "PreparedStatement",
            "description": "支持参数绑定的 SQL 执行对象，避免直接拼接参数值。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "2-2-6",
            "title": "Batch Operations",
            "description": "批量执行多条数据库操作，减少重复交互开销。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "2-2-7",
            "title": "SimpleJdbcInsert",
            "description": "利用表元数据简化插入操作的配置与执行。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "2-2-8",
            "title": "SimpleJdbcCall",
            "description": "简化存储过程和数据库函数的调用。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "2-2-9",
            "title": "SQLException Translation",
            "description": "将 JDBC 的 SQL 异常转换成 Spring 数据访问异常。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "2-2-10",
            "title": "Transaction Integration",
            "description": "把数据操作或测试执行纳入 Spring 的事务管理。",
            "rank": "S",
            "completed": false
          }
        ]
      },
      {
        "id": "2-3",
        "title": "R2DBC",
        "description": "用于以响应式、非阻塞方式访问关系型数据库的接口体系。",
        "rank": "B",
        "completed": false,
        "children": [
          {
            "id": "2-3-0",
            "title": "DatabaseClient",
            "description": "以响应式方式执行 SQL 并处理数据库结果。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "2-3-1",
            "title": "ConnectionFactory",
            "description": "创建响应式数据库连接的工厂接口。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "2-3-2",
            "title": "Reactive Transaction",
            "description": "通过响应式上下文协调数据库操作的事务边界。",
            "rank": "B",
            "completed": false
          }
        ]
      },
      {
        "id": "2-4",
        "title": "ORM",
        "description": "对象关系映射，将程序对象与关系型数据库表建立对应关系。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "2-4-0",
            "title": "ORM Integration",
            "description": "把对象关系映射工具接入 Spring 的资源与事务管理。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "2-4-1",
            "title": "JPA Integration",
            "description": "将 JPA 持久化能力与 Spring 的容器、事务和异常处理结合。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "2-4-2",
            "title": "EntityManagerFactory Integration",
            "description": "在 Spring 中配置和管理创建 JPA 实体管理器的工厂。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "2-4-3",
            "title": "JpaTransactionManager",
            "description": "管理 JPA 数据访问操作所使用的事务。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "2-4-4",
            "title": "Hibernate Integration",
            "description": "将 Hibernate 的会话、持久化和事务能力接入 Spring。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "2-4-5",
            "title": "Exception Translation",
            "description": "把底层数据库或持久化异常转换为统一的数据访问异常。",
            "rank": "T",
            "completed": false
          }
        ]
      },
      {
        "id": "2-5",
        "title": "OXM / XML Marshalling",
        "description": "在 Java 对象与 XML 文档之间进行转换。",
        "rank": "C",
        "completed": false
      }
    ]
  },
  {
    "id": "3",
    "title": "Web Servlet / Spring MVC",
    "description": "基于 Servlet 的 Web 开发体系，处理请求、控制器和响应。",
    "rank": "S",
    "completed": false,
    "children": [
      {
        "id": "3-0",
        "title": "Spring Web MVC",
        "description": "基于模型、视图和控制器分工的 Servlet Web 框架。",
        "rank": "S",
        "completed": false,
        "children": [
          {
            "id": "3-0-0",
            "title": "Servlet 基础",
            "description": "理解 Java Web 请求处理、过滤器与 Servlet 容器的基础机制。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "3-0-0-0",
                "title": "Servlet",
                "description": "在 Servlet 容器中接收请求并生成响应的 Java 组件。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-0-1",
                "title": "ServletContext",
                "description": "代表一个 Web 应用的共享环境，提供资源和属性等访问能力。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "3-0-0-2",
                "title": "Filter",
                "description": "在请求进入 Servlet 前及响应返回时执行过滤处理。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-0-3",
                "title": "Servlet Container",
                "description": "运行 Servlet 并管理请求、会话和组件生命周期的环境。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "3-0-1",
            "title": "DispatcherServlet",
            "description": "Spring MVC 的统一请求入口，协调查找处理器、执行和返回结果。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "3-0-1-0",
                "title": "Front Controller",
                "description": "用统一入口接收请求，再分派给具体业务处理器的模式。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-1-1",
                "title": "initStrategies()",
                "description": "初始化 MVC 所需的处理器映射、适配器和异常解析等策略。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "3-0-1-2",
                "title": "doDispatch()",
                "description": "执行 MVC 请求分派，协调处理器、拦截器和结果处理。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-1-3",
                "title": "Request Processing Pipeline",
                "description": "一个请求从进入框架到生成响应所经过的处理步骤。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "3-0-2",
            "title": "HandlerMapping",
            "description": "根据请求查找对应的处理器及相关拦截器。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "3-0-2-0",
                "title": "RequestMappingHandlerMapping",
                "description": "根据控制器上的请求映射注解匹配处理方法。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-2-1",
                "title": "HandlerExecutionChain",
                "description": "封装请求处理器及其需要执行的拦截器链。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "3-0-3",
            "title": "HandlerAdapter",
            "description": "用统一方式调用不同类型的请求处理器。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "3-0-3-0",
                "title": "RequestMappingHandlerAdapter",
                "description": "执行注解式控制器方法，协调参数解析和返回值处理。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "3-0-4",
            "title": "Controller Model",
            "description": "使用控制器类与方法表达 Web 请求处理逻辑的方式。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "3-0-4-0",
                "title": "@Controller",
                "description": "标记处理 Web 请求的控制器组件。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-4-1",
                "title": "@RestController",
                "description": "将控制器方法返回值默认写入响应体，常用于数据接口。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-4-2",
                "title": "@RequestMapping",
                "description": "声明请求路径、HTTP 方法等条件与处理方法的映射。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-4-3",
                "title": "@GetMapping",
                "description": "将 HTTP GET 请求映射到控制器方法。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-4-4",
                "title": "@PostMapping",
                "description": "将 HTTP POST 请求映射到控制器方法。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-4-5",
                "title": "@PutMapping",
                "description": "将 HTTP PUT 请求映射到控制器方法。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "3-0-4-6",
                "title": "@PatchMapping",
                "description": "将 HTTP PATCH 请求映射到控制器方法。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "3-0-4-7",
                "title": "@DeleteMapping",
                "description": "将 HTTP DELETE 请求映射到控制器方法。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "3-0-5",
            "title": "HandlerMethod",
            "description": "把控制器对象及其具体处理方法封装成统一描述。",
            "rank": "S",
            "completed": false
          },
          {
            "id": "3-0-6",
            "title": "Method Argument Resolution",
            "description": "把请求中的数据转换成控制器方法需要的参数。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "3-0-6-0",
                "title": "HandlerMethodArgumentResolver",
                "description": "决定某个方法参数如何从请求和上下文中取得。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-6-1",
                "title": "@RequestParam",
                "description": "把查询参数或表单参数绑定到方法参数。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-6-2",
                "title": "@PathVariable",
                "description": "读取 URL 路径模板中的变量值。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-6-3",
                "title": "@RequestHeader",
                "description": "把请求头的值绑定到方法参数。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "3-0-6-4",
                "title": "@CookieValue",
                "description": "读取指定 Cookie 并绑定到方法参数。",
                "rank": "B",
                "completed": false
              },
              {
                "id": "3-0-6-5",
                "title": "@RequestBody",
                "description": "读取请求体，并通过消息转换机制转换为方法参数。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-6-6",
                "title": "@ModelAttribute",
                "description": "把请求数据绑定到模型对象，或向模型添加公共属性。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "3-0-6-7",
                "title": "Custom ArgumentResolver",
                "description": "自定义控制器参数解析，例如自动注入当前用户信息。",
                "rank": "S",
                "completed": false
              }
            ]
          },
          {
            "id": "3-0-7",
            "title": "Return Value Handling",
            "description": "把控制器的返回结果转换为视图、响应体或其他响应形式。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "3-0-7-0",
                "title": "HandlerMethodReturnValueHandler",
                "description": "按返回值类型或注解决定如何处理控制器结果。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-7-1",
                "title": "@ResponseBody",
                "description": "将方法返回值通过消息转换机制写入 HTTP 响应体。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-7-2",
                "title": "ResponseEntity",
                "description": "同时表达响应体、响应头和 HTTP 状态码。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-7-3",
                "title": "Custom ReturnValueHandler",
                "description": "自定义控制器返回结果的处理方式。",
                "rank": "B",
                "completed": false
              }
            ]
          },
          {
            "id": "3-0-8",
            "title": "HTTP Message Conversion",
            "description": "在 HTTP 请求或响应体与 Java 对象之间转换数据。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "3-0-8-0",
                "title": "HttpMessageConverter",
                "description": "根据内容类型读写 HTTP 消息体的转换器接口。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-8-1",
                "title": "JSON / Jackson",
                "description": "使用 JSON 表达数据，并通过 Jackson 与 Java 对象互相转换。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-8-2",
                "title": "String Converter",
                "description": "读写文本类型的 HTTP 消息体。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "3-0-8-3",
                "title": "Custom Converter",
                "description": "按自定义格式或类型实现消息内容转换。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "3-0-9",
            "title": "Data Binding / Validation",
            "description": "把请求数据绑定到对象，并检查字段是否符合规则。",
            "rank": "T",
            "completed": false,
            "children": [
              {
                "id": "3-0-9-0",
                "title": "WebDataBinder",
                "description": "面向 Web 请求的数据绑定器，支持转换、字段限制与校验。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "3-0-9-1",
                "title": "@InitBinder",
                "description": "在控制器中定制数据绑定器的行为。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "3-0-9-2",
                "title": "@Valid",
                "description": "触发相关校验集成，并声明需要级联校验的对象。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "3-0-9-3",
                "title": "BindingResult",
                "description": "保存绑定和校验结果，便于控制器处理字段错误。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "3-0-10",
            "title": "Exception Handling",
            "description": "将请求处理中的异常转换成合适的错误响应。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "3-0-10-0",
                "title": "HandlerExceptionResolver",
                "description": "在 MVC 请求处理中解析异常并决定响应方式。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-10-1",
                "title": "ExceptionHandlerExceptionResolver",
                "description": "查找并调用带异常处理注解的方法。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-10-2",
                "title": "@ExceptionHandler",
                "description": "声明处理指定异常类型的控制器方法。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-10-3",
                "title": "@ControllerAdvice",
                "description": "集中定义适用于多个控制器的异常处理、绑定和模型逻辑。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-10-4",
                "title": "ResponseStatusException",
                "description": "携带 HTTP 状态码等信息的异常，用于表达请求错误。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "3-0-10-5",
                "title": "ProblemDetail",
                "description": "使用标准问题详情结构描述 HTTP 接口错误。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "3-0-11",
            "title": "Interceptor",
            "description": "在控制器执行前后插入通用请求处理逻辑。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "3-0-11-0",
                "title": "HandlerInterceptor",
                "description": "Spring MVC 的请求拦截器接口。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-11-1",
                "title": "preHandle",
                "description": "在处理器执行前调用，可决定是否继续处理请求。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-11-2",
                "title": "postHandle",
                "description": "在处理器正常执行后、视图渲染前处理模型等信息。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "3-0-11-3",
                "title": "afterCompletion",
                "description": "在请求处理完成后执行清理或记录工作。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "3-0-12",
            "title": "Filter vs Interceptor vs AOP",
            "description": "比较 Servlet 过滤、MVC 请求拦截和方法切面的作用位置。",
            "rank": "S",
            "completed": false
          },
          {
            "id": "3-0-13",
            "title": "CORS",
            "description": "通过跨域资源共享规则控制浏览器能否读取跨源响应。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "3-0-14",
            "title": "Multipart",
            "description": "处理包含文件和表单字段的多部分请求。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "3-0-15",
            "title": "Static Resources",
            "description": "为浏览器提供图片、样式和脚本等静态文件。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "3-0-16",
            "title": "HTTP Caching",
            "description": "利用缓存头和条件请求减少重复传输与服务器处理。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "3-0-17",
            "title": "API Versioning",
            "description": "区分和管理接口版本，支持接口演进与兼容。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "3-0-18",
            "title": "Async Requests",
            "description": "将部分请求处理延后到异步任务，释放原请求处理线程。",
            "rank": "T",
            "completed": false,
            "children": [
              {
                "id": "3-0-18-0",
                "title": "Callable",
                "description": "把可返回结果的任务交由 MVC 异步执行。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "3-0-18-1",
                "title": "DeferredResult",
                "description": "先返回一个结果占位对象，再由其他执行流程提供实际响应。",
                "rank": "T",
                "completed": false
              },
              {
                "id": "3-0-18-2",
                "title": "Async Request Lifecycle",
                "description": "异步请求从启动到完成、超时或出错的生命周期。",
                "rank": "T",
                "completed": false
              }
            ]
          },
          {
            "id": "3-0-19",
            "title": "Streaming / SSE",
            "description": "以流式方式持续发送数据，SSE 常用于服务器向浏览器推送事件。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "3-0-20",
            "title": "MVC 源码完整调用链",
            "description": "沿请求分派流程理解过滤、映射、参数解析、执行与结果处理。",
            "rank": "S",
            "completed": false,
            "children": [
              {
                "id": "3-0-20-0",
                "title": "FilterChain",
                "description": "按顺序执行 Servlet 过滤器，最终到达目标 Servlet。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-20-1",
                "title": "DispatcherServlet",
                "description": "Spring MVC 的统一请求入口，协调查找处理器、执行和返回结果。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-20-2",
                "title": "HandlerMapping",
                "description": "根据请求查找对应的处理器及相关拦截器。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-20-3",
                "title": "HandlerInterceptor",
                "description": "Spring MVC 的请求拦截器接口。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-20-4",
                "title": "HandlerAdapter",
                "description": "用统一方式调用不同类型的请求处理器。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-20-5",
                "title": "ArgumentResolver",
                "description": "把请求和上下文信息解析成控制器需要的方法参数。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-20-6",
                "title": "Controller",
                "description": "接收请求数据、调用业务逻辑并返回处理结果的组件。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-20-7",
                "title": "ReturnValueHandler",
                "description": "将控制器返回值转换成框架可以输出的响应形式。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-20-8",
                "title": "HttpMessageConverter",
                "description": "根据内容类型读写 HTTP 消息体的转换器接口。",
                "rank": "S",
                "completed": false
              },
              {
                "id": "3-0-20-9",
                "title": "ExceptionResolver",
                "description": "把请求处理异常解析为可返回给客户端的错误结果。",
                "rank": "S",
                "completed": false
              }
            ]
          }
        ]
      },
      {
        "id": "3-1",
        "title": "REST Clients",
        "description": "用于调用 HTTP 接口并处理请求与响应的客户端工具。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "3-1-0",
            "title": "RestClient",
            "description": "使用流式 API 发起同步 HTTP 请求的客户端。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "3-1-1",
            "title": "WebClient",
            "description": "支持非阻塞调用和流式响应处理的 HTTP 客户端。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "3-1-2",
            "title": "HTTP Service Clients",
            "description": "通过接口与注解描述 HTTP 调用，由代理生成客户端实现。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "3-1-3",
            "title": "Message Conversion",
            "description": "在客户端请求、响应内容与 Java 对象之间转换数据。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "3-1-4",
            "title": "Error Handling",
            "description": "识别请求或处理流程中的失败，并转换或处理对应错误。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "3-1-5",
            "title": "Timeout / Connection Management",
            "description": "管理连接资源和等待时限，避免远程调用无限阻塞。",
            "rank": "T",
            "completed": false
          }
        ]
      },
      {
        "id": "3-2",
        "title": "Servlet Web Testing",
        "description": "验证基于 Servlet 的 Web 请求映射和响应行为。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "3-2-0",
            "title": "MockMvc",
            "description": "无需启动真实 HTTP 服务器即可测试 Spring MVC 请求处理。",
            "rank": "T",
            "completed": false
          }
        ]
      },
      {
        "id": "3-3",
        "title": "WebSocket",
        "description": "建立持久双向连接，让客户端与服务器随时互相发送消息。",
        "rank": "B",
        "completed": false,
        "children": [
          {
            "id": "3-3-0",
            "title": "WebSocketHandler",
            "description": "处理 WebSocket 建连、消息接收和连接关闭等事件。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "3-3-1",
            "title": "WebSocketSession",
            "description": "表示一条 WebSocket 连接及其消息发送等操作。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "3-3-2",
            "title": "Handshake",
            "description": "建立 WebSocket 连接前进行协议协商与升级的过程。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "3-3-3",
            "title": "SockJS",
            "description": "提供类似 WebSocket 的通信方式，并在需要时使用替代传输方案。",
            "rank": "C",
            "completed": false
          },
          {
            "id": "3-3-4",
            "title": "STOMP",
            "description": "一种消息协议，通过目的地、订阅等概念组织消息通信。",
            "rank": "B",
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "4",
    "title": "Web Reactive / WebFlux",
    "description": "基于响应式编程的 Web 体系，适合非阻塞和流式处理。",
    "rank": "B",
    "completed": false,
    "children": [
      {
        "id": "4-0",
        "title": "Reactive Fundamentals",
        "description": "理解异步数据流、订阅关系与背压等响应式基础概念。",
        "rank": "B",
        "completed": false,
        "children": [
          {
            "id": "4-0-0",
            "title": "Reactive Streams",
            "description": "规范异步数据流的发布、订阅和背压协作。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "4-0-1",
            "title": "Publisher",
            "description": "发布数据流，并允许订阅者建立订阅关系。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "4-0-2",
            "title": "Subscriber",
            "description": "接收订阅通知、数据、完成或错误信号的消费者。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "4-0-3",
            "title": "Subscription",
            "description": "连接发布者和订阅者，用于请求数据数量或取消订阅。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "4-0-4",
            "title": "Backpressure",
            "description": "由消费方反馈处理能力，协调上游发送数据的速度。",
            "rank": "B",
            "completed": false
          }
        ]
      },
      {
        "id": "4-1",
        "title": "Spring WebFlux",
        "description": "Spring 的响应式 Web 框架，支持非阻塞请求与数据流处理。",
        "rank": "B",
        "completed": false,
        "children": [
          {
            "id": "4-1-0",
            "title": "DispatcherHandler",
            "description": "WebFlux 的统一请求分派入口。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "4-1-1",
            "title": "Annotated Controller",
            "description": "通过注解声明请求映射和参数的响应式控制器写法。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "4-1-2",
            "title": "Functional Endpoints",
            "description": "用路由函数与处理函数定义 Web 接口。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "4-1-3",
            "title": "WebFilter",
            "description": "在 WebFlux 请求处理链中加入通用过滤逻辑。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "4-1-4",
            "title": "Data Binding",
            "description": "把外部输入值转换并设置到目标对象中。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "4-1-5",
            "title": "Exception Handling",
            "description": "将请求处理中的异常转换成合适的错误响应。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "4-1-6",
            "title": "CORS / HTTP Cache",
            "description": "为响应式 Web 接口配置跨域规则与 HTTP 缓存策略。",
            "rank": "B",
            "completed": false
          }
        ]
      },
      {
        "id": "4-2",
        "title": "WebClient",
        "description": "支持非阻塞调用和流式响应处理的 HTTP 客户端。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "4-2-0",
            "title": "Request",
            "description": "配置 WebClient 请求的方法、地址、请求头与请求体。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "4-2-1",
            "title": "Response",
            "description": "读取 WebClient 返回的状态、响应头和响应体。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "4-2-2",
            "title": "ExchangeFilterFunction",
            "description": "在 WebClient 调用链中统一处理请求或响应。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "4-2-3",
            "title": "Error Handling",
            "description": "识别请求或处理流程中的失败，并转换或处理对应错误。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "4-2-4",
            "title": "Blocking Boundary",
            "description": "识别阻塞操作与非阻塞流程的边界，避免阻塞事件循环线程。",
            "rank": "T",
            "completed": false
          }
        ]
      },
      {
        "id": "4-3",
        "title": "Reactive WebSocket",
        "description": "在响应式流程中收发 WebSocket 消息。",
        "rank": "B",
        "completed": false
      },
      {
        "id": "4-4",
        "title": "RSocket",
        "description": "支持请求响应、数据流和双向通道等交互模式的通信协议。",
        "rank": "C",
        "completed": false
      }
    ]
  },
  {
    "id": "5",
    "title": "Integration",
    "description": "Spring 与消息、任务、缓存和可观测性等外部能力的集成。",
    "rank": "T",
    "completed": false,
    "children": [
      {
        "id": "5-0",
        "title": "REST Clients",
        "description": "用于调用 HTTP 接口并处理请求与响应的客户端工具。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "5-0-0",
            "title": "RestClient",
            "description": "使用流式 API 发起同步 HTTP 请求的客户端。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-0-1",
            "title": "WebClient",
            "description": "支持非阻塞调用和流式响应处理的 HTTP 客户端。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-0-2",
            "title": "HTTP Service Client",
            "description": "通过声明式接口定义远程 HTTP 服务调用。",
            "rank": "T",
            "completed": false
          }
        ]
      },
      {
        "id": "5-1",
        "title": "JMS",
        "description": "Java 消息服务标准接口，用于发送和消费消息。",
        "rank": "B",
        "completed": false,
        "children": [
          {
            "id": "5-1-0",
            "title": "JmsTemplate",
            "description": "封装 JMS 连接与会话操作，简化消息发送和接收。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "5-1-1",
            "title": "MessageListenerContainer",
            "description": "管理消息监听器的运行、连接与消息分派。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "5-1-2",
            "title": "@JmsListener",
            "description": "将方法声明为 JMS 消息监听入口。",
            "rank": "B",
            "completed": false
          }
        ]
      },
      {
        "id": "5-2",
        "title": "JCA",
        "description": "通过标准连接器将企业应用与外部企业信息系统连接。",
        "rank": "C",
        "completed": false
      },
      {
        "id": "5-3",
        "title": "JMX",
        "description": "通过管理接口查看和操作 Java 应用的运行状态。",
        "rank": "C",
        "completed": false
      },
      {
        "id": "5-4",
        "title": "Email",
        "description": "通过邮件发送支持构建通知、附件等邮件功能。",
        "rank": "C",
        "completed": false
      },
      {
        "id": "5-5",
        "title": "Task Execution",
        "description": "通过执行器管理后台任务和异步工作。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "5-5-0",
            "title": "TaskExecutor",
            "description": "Spring 对任务执行的统一抽象。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-5-1",
            "title": "ThreadPoolTaskExecutor",
            "description": "基于线程池执行任务，并提供 Spring 风格的配置与管理。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-5-2",
            "title": "@Async",
            "description": "让通过代理调用的方法交给异步执行器运行。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-5-3",
            "title": "AsyncConfigurer",
            "description": "定制异步执行器及异步方法的异常处理方式。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "5-5-4",
            "title": "Thread Pool Sizing",
            "description": "根据任务特点和资源限制设置线程池大小。",
            "rank": "S",
            "completed": false
          },
          {
            "id": "5-5-5",
            "title": "Queue Capacity",
            "description": "限制等待执行的任务数量，影响排队延迟和资源占用。",
            "rank": "S",
            "completed": false
          },
          {
            "id": "5-5-6",
            "title": "Rejection Policy",
            "description": "当执行器无法接收更多任务时，决定如何处理新任务。",
            "rank": "S",
            "completed": false
          },
          {
            "id": "5-5-7",
            "title": "Context Propagation",
            "description": "在线程切换或异步流程之间传递日志、追踪等上下文信息。",
            "rank": "T",
            "completed": false
          }
        ]
      },
      {
        "id": "5-6",
        "title": "Task Scheduling",
        "description": "按固定间隔或时间规则自动触发任务。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "5-6-0",
            "title": "TaskScheduler",
            "description": "抽象定时任务的安排和执行。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-6-1",
            "title": "ThreadPoolTaskScheduler",
            "description": "使用线程池执行定时任务的调度器。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-6-2",
            "title": "@Scheduled",
            "description": "为方法声明固定间隔或 cron 形式的调度规则。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-6-3",
            "title": "fixedRate",
            "description": "以计划执行的固定周期触发任务，实际执行可能受耗时和资源限制。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-6-4",
            "title": "fixedDelay",
            "description": "从上一次执行完成后开始计时，等待指定间隔再执行。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-6-5",
            "title": "cron",
            "description": "用表达式描述任务应在哪些时间点执行。",
            "rank": "T",
            "completed": false
          }
        ]
      },
      {
        "id": "5-7",
        "title": "Cache Abstraction",
        "description": "以统一接口和注解管理缓存，减少与具体缓存实现的耦合。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "5-7-0",
            "title": "Cache",
            "description": "表示按键读取、写入和删除数据的缓存。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-7-1",
            "title": "CacheManager",
            "description": "管理并获取不同名称的缓存实例。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-7-2",
            "title": "@Cacheable",
            "description": "优先使用缓存结果，未命中时执行方法并缓存返回值。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-7-3",
            "title": "@CachePut",
            "description": "执行方法，并用返回值更新指定缓存。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-7-4",
            "title": "@CacheEvict",
            "description": "按规则删除缓存项或清空缓存。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-7-5",
            "title": "@Caching",
            "description": "把多个缓存操作组合到同一个方法上。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "5-7-6",
            "title": "CacheResolver",
            "description": "根据调用上下文动态选择本次操作使用的缓存。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "5-7-7",
            "title": "KeyGenerator",
            "description": "为方法调用生成用于缓存查找和存储的键。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-7-8",
            "title": "Cache + AOP 原理",
            "description": "通过代理拦截方法调用，在业务执行前后处理缓存。",
            "rank": "T",
            "completed": false
          }
        ]
      },
      {
        "id": "5-8",
        "title": "Observability",
        "description": "通过指标、日志和链路信息理解应用运行状态与问题。",
        "rank": "T",
        "completed": false,
        "children": [
          {
            "id": "5-8-0",
            "title": "Observation",
            "description": "描述一次可观测的操作，并在生命周期中记录相关信息。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-8-1",
            "title": "ObservationRegistry",
            "description": "统一管理观测配置与处理器，协调观测事件的处理。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-8-2",
            "title": "Metrics",
            "description": "用计数、耗时和资源占用等数值描述应用运行情况。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-8-3",
            "title": "Tracing",
            "description": "跟踪请求跨组件或服务的调用路径与耗时。",
            "rank": "T",
            "completed": false
          },
          {
            "id": "5-8-4",
            "title": "Context Propagation",
            "description": "在线程切换或异步流程之间传递日志、追踪等上下文信息。",
            "rank": "T",
            "completed": false
          }
        ]
      },
      {
        "id": "5-9",
        "title": "JVM AOT Cache",
        "description": "利用 JVM 提前准备的缓存减少重复启动工作，具体能力取决于 JDK。",
        "rank": "C",
        "completed": false
      },
      {
        "id": "5-10",
        "title": "JVM Checkpoint / Restore",
        "description": "保存运行中 JVM 的状态，再从检查点恢复以缩短启动过程。",
        "rank": "C",
        "completed": false
      }
    ]
  },
  {
    "id": "6",
    "title": "Language Support",
    "description": "Spring 对 Kotlin、Groovy 等 JVM 语言的适配支持。",
    "rank": "C",
    "completed": false,
    "children": [
      {
        "id": "6-0",
        "title": "Kotlin",
        "description": "可与 Java 互操作的 JVM 语言，提供简洁语法与空安全等能力。",
        "rank": "B",
        "completed": false,
        "children": [
          {
            "id": "6-0-0",
            "title": "Kotlin Extensions",
            "description": "为 Kotlin 开发提供更自然的 Spring API 调用方式。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "6-0-1",
            "title": "Coroutines",
            "description": "用较直观的顺序代码组织可挂起的异步操作。",
            "rank": "B",
            "completed": false
          },
          {
            "id": "6-0-2",
            "title": "Null Safety",
            "description": "通过类型、注解和工具明确哪些值允许为空，减少空指针问题。",
            "rank": "B",
            "completed": false
          }
        ]
      },
      {
        "id": "6-1",
        "title": "Apache Groovy",
        "description": "运行于 JVM 的语言，常用于脚本和灵活的配置表达。",
        "rank": "C",
        "completed": false
      }
    ]
  }
];
