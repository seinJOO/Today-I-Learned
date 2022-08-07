package hello.hellospring.service;

import hello.hellospring.domain.Member;
import hello.hellospring.repository.MemberRepository;
import hello.hellospring.repository.MemoryMemberRepository;

import java.util.List;
import java.util.Optional;

public class MemberService {

    /**
     * 회원 정보 레포지토리 import
     * 레퍼지토리를 서비스에서 직접 new로 생성하는게 아니라, 외부에서 객체를 주입해줄 수 있도록 바꿔줌
     * 테스트 등의 환경에서도 동일한 레퍼지토리를 사용할 수 있게 됨
     */
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    /**
     * 회원 가입
     */
    public Long join(Member member) {
        // 회원 정보 유효성 검사(중복X)
//        result 값이 이미 있으면 예외처리
//        결과값을 Optional로 감싸서 받아오면 null 등 내부 데이터가 어떤 내용이든 활용 가능
//        Optional에는 여러 유용한 메서드도 있으니 사용하면 좋음
//        ex) .orElseGet() : 값이 있으면 꺼내고, 없으면 어떠한 메서드를 실행
        // memberRepository.findByName()이 이미 Optional을 리턴하기 때문에 아래와 같이 사용//
        validateDuplicateMember(member);

        // 회원가입 시 member객체를 저장한 후 id 반환
        memberRepository.save(member);
        return member.getId();
    }

    // Extract Method로 새로운 클래스 생성 + 메서드로 전환 (Ctrl+Alt+M)
    private void validateDuplicateMember(Member member) {
        memberRepository.findByName(member.getName())
                .ifPresent(m -> {
                throw new IllegalStateException("이미 존재하는 회원입니다.");
                });
    }

    /**
     * 전체 회원 조회
     */
    public List<Member> findMembers() {
        return memberRepository.findAll();
    }

    /**
     * ID로 회원정보 조회
     */
    public Optional<Member> findOne(Long memberId) {
        return memberRepository.findById(memberId);
    }
}
