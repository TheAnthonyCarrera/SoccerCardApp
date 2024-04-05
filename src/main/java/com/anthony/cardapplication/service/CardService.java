package com.anthony.cardapplication.service;

import com.anthony.cardapplication.model.Card;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CardService {
    Card saveCard(Card card);
    public List<Card> getAllCard();
}
