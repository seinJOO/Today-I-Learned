package hello.hellospring.controller;

import hello.hellospring.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

// 컨트롤러를 선언한 즉시 스프링이 MemberController 객체를 싱글톤으로 생성하여 컨테이너에 저장함
@Controller
public class MemberController {
    /** 정형화된 스프링 패턴 -  세 파일 모두에 어노테이션 설정하여 연결하기
     * @ Controller를 통해 외부 요청을 받고
     * @ Service에서 비즈니스 로직을 만들고
     * @ Repository에서 데이터를 저장 => 셋 모두 Component를 포함함
     */

    private final MemberService memberService;

    @Autowired // 스프링 빈에 등록되어 있는 서비스 객체와 생성자를 연결시켜줌 (DI)
    public MemberController(MemberService memberService) {
        // 서비스는 새로 생성할 필요 없이 모든 컨트롤러에서 동일하게 사용하는 객체
        this.memberService = memberService;
    }
}
