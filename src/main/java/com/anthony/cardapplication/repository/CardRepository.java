package com.anthony.cardapplication.repository;

import com.anthony.cardapplication.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {
    @Query("SELECT c FROM Card c WHERE REPLACE(LOWER(CONCAT(c.first_name, ' ', c.last_name)), ' ', '') = REPLACE(LOWER(:name), ' ', '')")
    List<Card> searchCard(@Param("name") String name);
}

