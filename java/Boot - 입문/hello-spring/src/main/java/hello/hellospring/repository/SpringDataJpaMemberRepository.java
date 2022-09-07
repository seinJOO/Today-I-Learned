package hello.hellospring.repository;

import hello.hellospring.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
    // 인터페이스가 인터페이스를 상속받을 때는 extends !
    // 인터페이스는 여러 인터페이스를 상속받을 수 있음

public interface SpringDataJpaMemberRepository extends JpaRepository<Member, Long>, MemberRepository {

    // JpaRepository는 data-jpa 라이브러리에서 제공하는 인터페이스
   @Override
    public Optional<Member> findByName(String name);
   // JPQL: select m from Member m where m.name = ?
    // 파라미터, 반환타입, 메서드명 등을 reflection기술로 읽어들여서 풀어내기 때문에
    // 샘플 메서드 한 개는 꼭 필요함 -> findByEmail 등등이 자동으로 작동하게 됨

   /*
   * JpaRepository를 상속받으면 스프링부트가 Proxy로 인터페이스에 대한 구현체를 만들어내고 스프링 빈에 등록함
   * => 스프링 빈에 등록된 EntityManager를 우리가 Injection해서 사용
   * JpaRepository 인터페이스를 들여다보면 웬만한 메서드가 내장되어 있음 (페이징까지 제공)
   * (JpaRepository : findAll, save, flush, deleteInBatch, getOne, ...)
   * (CrudRepository : save, findOne, exists, count, delete, ...)
   *  -> 리턴 자료형 등등 체크하기
   *
   * *** JPA는 Querydsl 라이브러리로 복잡한 동적 쿼리를 구현할 수도 있고,
   * 네이티브 쿼리나 JdbcTemplate을 함께 사용할 수도 있다 (참고)
   *
   * JdbcTemplate : dataSource를 JdbcTemplate객체에 담아 사용하여 코드가 상당히 줄어드나 SQL쿼리를 직접 작성해야했음
   * JPA : 기본 CRUD를 제외한 SELECT 등의 경우 JPQL을 직접 작성해야 했음
   * 스프링 데이터 JPA : 구현 클래스를 작성할 필요 없이 인터페이스만으로 작성이 끝나버림
   * *** JPA를 통한 모든 데이터 변경은 트랜잭션 안에서 실행해야 함(MemberService)
   * */


}
