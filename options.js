const itemLink = ["홈페이지", "포탈", "학사서비스", "아주Bb", "전자출석부", "학사일정", "중앙도서관", "학과 홈페이지", "사이트맵", "공지사항", "수강신청", "요람"];

function ItemLinkOptions(page, itemLink, num) {
    for (let item of itemLink) {
        let button = document.createElement('button');
        button.textContent = item
        button.addEventListener('click', function() {
            switch(num) {
                case 1: 
                    chrome.storage.sync.set({Link1: item}, function() { 
                        console.log(item); 
                    }); 
                    break;
                case 2: 
                    chrome.storage.sync.set({Link2: item}, function() { 
                        console.log(item); 
                    }); 
                    break;
                case 3: 
                    chrome.storage.sync.set({Link3: item}, function() { 
                        console.log(item); 
                    });
                     break;
                case 4: 
                    chrome.storage.sync.set({Link4: item}, function() { 
                        console.log(item); 
                    }); 
                    break;
                case 5: 
                    chrome.storage.sync.set({Link5: item}, function() { 
                        console.log(item); 
                    }); 
                    break;
                case 6: 
                    chrome.storage.sync.set({Link6: item}, function() { 
                        console.log(item); 
                    }); 
                    break;
                case 7: 
                    chrome.storage.sync.set({Link7: item}, function() { 
                        console.log(item); 
                    }); 
                    break;
                case 8: 
                    chrome.storage.sync.set({Link8: item}, function() { 
                        console.log(item); }); 
                    break;
                case 9: 
                    chrome.storage.sync.set({Link9: item}, function() { 
                        console.log(item); 
                    }); 
                    break;
                default :
                    break;
            }
        });
    page.appendChild(button);
    }
}

window.onload = function(){
    ItemLinkOptions(document.getElementById('button-link-1'), itemLink, 1);
    ItemLinkOptions(document.getElementById('button-link-2'), itemLink, 2);
    ItemLinkOptions(document.getElementById('button-link-3'), itemLink, 3);
    ItemLinkOptions(document.getElementById('button-link-4'), itemLink, 4);
    ItemLinkOptions(document.getElementById('button-link-5'), itemLink, 5);
    ItemLinkOptions(document.getElementById('button-link-6'), itemLink, 6);
    ItemLinkOptions(document.getElementById('button-link-7'), itemLink, 7);
    ItemLinkOptions(document.getElementById('button-link-8'), itemLink, 8);
    ItemLinkOptions(document.getElementById('button-link-9'), itemLink, 9);
}

