package hello.hellospring;

import hello.hellospring.repository.JdbcMemberRepository;
import hello.hellospring.repository.JdbcTemplateMemberRepository;
import hello.hellospring.repository.MemberRepository;
import hello.hellospring.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

/**
 * 자바 코드로 직접 스프링 빈 등록하기
 * 컨트롤러는 ComponentScan이기 때문에 따로 빈 객체 설정을 할 수는 없음
 * => Autowired를 스캔하면서 컨트롤러를 빈에 주입
 * 
 * ** 컴포넌트 스캔을 사용할 경우 
 *    정형화되지 않거나, 상황에 따라 구현클래스를 변경해야 하면 설정을 통해 스프링 빈으로 등록
 *    => 아직 DB가 정해지지 않은 상황에서 스프링 빈으로 등록하여 작업할 경우
 *       추후 DB에 대한 설정만 해주면 비즈니스 로직 코드 변경 없이 수월하게 바꿔치기 가능
 *
  */



@Configuration
public class SpringConfig {

    // SpringBoot가 프로퍼티파일을 기반으로 dataSource를 만들고 관리할 수 있게 설정
    private DataSource dataSource; 

    @Autowired
    public SpringConfig(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Bean
    public MemberService memberService() {
        // 스프링에 빈으로 생성된 MemberRepository를 MemberService에 주입함
        return new MemberService(memberRepository());
    }

    @Bean
    public MemberRepository memberRepository() {
        // MemberRepository는 인터페이스이기 때문에 객체 생성 X
        //return new MemoryMemberRepository();

        // JDBC 객체를 빈으로 등록하기
        return new JdbcTemplateMemberRepository(dataSource);
    }

    /**
     * DI(의존성 주입)의 세 가지 방법 (* 스프링 빈에 등록된 클래스 내에서 선언된 경우에만 @Autowired가 동작함)
     * 1. 생성자 주입 (권장 - 처음에 애플리케이션이 조립될 때 싱글톤으로 생성된 후 마무리됨)
     * private final MemberService memberService;
     * @ Autowired
 *     public MemberController(MemberService memberService) {
 *         this.memberService = memberService; }
     *
     * 2. 필드 주입 (지양 - 스프링에 생성된 싱글톤 객체에 대해 설정을 변경할 수 있는 방법이 없음)
     * @ Autowired
     * private final MemberService memberService;
     *
     * 3. Setter 방식 (지양 - setter 특성에 의해 호출될 수 있기 때문에 public으로 노출됨)
     *                  ** 스프링 빈 객체는 실행 중에 동적으로 설정이 변경될 수 없음
     * private MemberService memberService;
     * @ Autowired
     * public setMemberController(MemberService memberService) {
     *      this.memberService = memberService; }
     */

}
