import React from 'react';

import { DEFAULT_IMAGE } from '@/data/constants';
import type { ArticleModel } from '@/widgets/SearchResults';
import type { SearchResultsInitialState } from '@sitecore-search/react';
import { FilterEqual, WidgetDataType, useSearchResults, widget } from '@sitecore-search/react';

const SEARCH_CONFIG = {
  source: import.meta.env.VITE_SEARCH_SOURCE,
};

type ArticleDetailProps = {
  id?: string;
};

type InitialState = SearchResultsInitialState<'itemsPerPage'>;

export const ArticleDetailComponent = ({ id }: ArticleDetailProps): JSX.Element => {
  const {
    widgetRef,
    queryResult: { data: { content: articles = [] } = {} },
  } = useSearchResults<ArticleModel, InitialState>({
    query: (query) => {
      const equalFilter = new FilterEqual('id', id);
      query.getRequest().setSearchFilter(equalFilter);

      if (SEARCH_CONFIG.source !== '') {
        query.getRequest().addSource(SEARCH_CONFIG.source);
      }
    },
    state: {
      itemsPerPage: 1,
    },
  });
  let mainArticle: ArticleModel = { id: '', title: '' };
  if (articles.length > 0) {
    mainArticle = articles[0];
  }
  return (
    <div className="max-w-[1280px] mx-auto pt-16" ref={widgetRef}>
      <div className="flex items-center justify-between space-x-8">
        {/* Text Content Section */}
        <div className="flex-1 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 leading-tight">{mainArticle.title}</h1>
          <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{mainArticle?.subtitle}</div>
          <div className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">{mainArticle?.description}</div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            className="max-w-full h-auto rounded-lg shadow-lg"
            src={mainArticle.image_url || DEFAULT_IMAGE}
            alt="Main article visual"
          />
        </div>
      </div>
    </div>
  );
};

const ArticleDetailWidget = widget(ArticleDetailComponent, WidgetDataType.SEARCH_RESULTS, 'content');

export default ArticleDetailWidget;
